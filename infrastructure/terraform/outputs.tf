output "resource_group_name" {
  description = "Nom du Resource Group principal"
  value       = azurerm_resource_group.main.name
}

output "aks_cluster_name" {
  description = "Nom du cluster AKS"
  value       = azurerm_kubernetes_cluster.main.name
}

output "acr_login_server" {
  description = "URL de l'Azure Container Registry"
  value       = azurerm_container_registry.acr.login_server
}

output "aks_node_resource_group" {
  description = "Resource Group des nodes AKS"
  value       = azurerm_kubernetes_cluster.main.node_resource_group
}