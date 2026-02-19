# template sourced from https://github.com/akirak/flake-templates
{
  inputs = {
    # You can override nixpkgs to use the latest set of node packages
    # nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    systems.url = "github:nix-systems/default";
  };

  outputs = { systems, nixpkgs, ... }@inputs:
    let
      eachSystem = f:
        nixpkgs.lib.genAttrs (import systems)
        (system: f nixpkgs.legacyPackages.${system});
    in {
      devShells = eachSystem (pkgs: {
        default = pkgs.mkShell {
          buildInputs = with pkgs;
            [
              nodejs
              # You can set the major version of Node.js to a specific one instead
              # of the default version
              # pkgs.nodejs-19_x

              # You can choose pnpm, yarn, or none (npm).
              bun
              unzip # needed for bun upgrade to work

              # note that vite is not in nixpkgs, so must still run bun install: https://github.com/NixOS/nixpkgs/issues/180966#issuecomment-1259584193
            ] ++ (with nodePackages; [
              # extra node packages
              typescript
              typescript-language-server
            ]);
        };
      });
    };
}
