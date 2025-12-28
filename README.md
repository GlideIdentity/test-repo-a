# Internal to Public Repository Sync

Automated CI/CD workflow that syncs code artifacts from internal repository (`glideidentity/test-repo-b`) to public repository (`glideidentity/test-repo-a`) with semantic versioning and release notes.

## How It Works

1. **Developer creates release manually** → In internal repository (`test-repo-b`)
2. **Workflow triggers** → On release publish event
3. **Code artifacts filtered** → Using `.artifact-include` patterns
4. **Sync to public** → Artifacts pushed to `test-repo-a`
5. **Release created** → Same release created in public repository
6. **Update release info** → `RELEASES.md` updated in internal repo's main branch

## Setup

### Required Secret

In `test-repo-b` → Settings → Secrets → Actions:

- `PUBLIC_REPO_TOKEN`: Token with write access to `glideidentity/test-repo-a`

### Configure Artifacts

Edit `.artifact-include` to specify which files sync to public repo.

## Creating a Release

1. **Create a release** in the internal repository (`test-repo-b`):
   - Go to Releases → Draft a new release
   - Choose a tag (e.g., `v1.0.0`)
   - Add release name and notes
   - Publish the release

2. **Workflow automatically**:
   - Syncs code artifacts to public repository
   - Creates the same release in public repository
   - Updates `RELEASES.md` in internal repo's main branch

## Workflows

- **`sync-to-public.yml`**: Main workflow - triggers when release is manually created, syncs artifacts to public repo and updates `RELEASES.md`
- **`clone-release-notes.yml`**: Clones release notes from internal to public (backup/alternative)
- **`ci-tests.yml`**: Runs CI tests on push/PR

## Files

- `.artifact-include`: Files to sync to public repo
- `CHANGELOG.md`: Auto-generated changelog (synced to public)
- `RELEASES.md`: Release history tracking

## License

MIT
