resource "azurerm_static_web_app" "static_site" {
    name                = "web-${var.name}-countdown"
    resource_group_name = var.resource_group_name
    location            = var.resource_group_location
    sku_tier            = "Free"
    sku_size            = "Free"

    repository_url      = "https://github.com/philippmos/vacation-countdown"
    repository_branch   = var.name
    repository_token    = ""
}