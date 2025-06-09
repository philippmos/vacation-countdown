module "resource_group" {
  source              = "./modules/resource_group"
  resource_group_name = var.resource_group_name
  location            = var.location
}

module "southafrica_static_site" {
  source                  = "./modules/static_site"
  name                    = "southafrica"
  resource_group_name     = module.resource_group.name
  resource_group_location = module.resource_group.location
}

module "retirement_static_site" {
  source                  = "./modules/static_site"
  name                    = "retirement"
  resource_group_name     = module.resource_group.name
  resource_group_location = module.resource_group.location
}