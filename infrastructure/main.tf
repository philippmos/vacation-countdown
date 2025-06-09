module "resource_group" {
  source              = "./modules/resource_group"
  resource_group_name = var.resource_group_name
  location            = var.location
}

module "vacation_static_site" {
  source                  = "./modules/static_site"
  static_site_name        = "vacation-countdown"
  resource_group_name     = module.resource_group.name
  resource_group_location = module.resource_group.location
}

module "retirement_static_site" {
  source                  = "./modules/static_site"
  static_site_name        = "retirement-countdown"
  resource_group_name     = module.resource_group.name
  resource_group_location = module.resource_group.location
}