# Customizable Vacation Countdown

## Create a new custom theme
### Setup
1. Create a new branch
2. Create a new Azure Static Web App (automated soon via Terraform)
3. Create a Github Action Secret `AZ_TOKEN_[theme]`

### Styles
1. Create a new `[themename]/_variables.scss` file in `src/styles/themes/` or copy from existing and modify values
2. Save a backgroundimage in `src/assets` and refere in custom property

### Scripts
1. In `src/scripts/providers/theme-provider.ts` add a new Theme in `themeModels` property

### Configuration
1. In `package.json` create a new build:prod-Script and set the `ACTIVE_THEME` environment variable
2. In `.github/workflows/azure-staticwebapp.yml` configure `AZ_WEBAPP_TOKEN` and `THEME_KEY`