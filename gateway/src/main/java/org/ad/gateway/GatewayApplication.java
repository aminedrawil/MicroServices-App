package org.ad.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.ReactiveDiscoveryClient;
import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;
import org.springframework.cloud.gateway.discovery.DiscoveryLocatorProperties;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GatewayApplication {

//    @Bean
//    RouteLocator routes(RouteLocatorBuilder builder) {
//        return builder.routes()
//                .route(r->r.path("/customers/**").uri("lb://CUSTOMER-SERVICE"))
//                .route(r->r.path("/products/**").uri("lb://PRODUCTS-SERVICE"))
//                .build();
//    }

    @Bean
    DiscoveryClientRouteDefinitionLocator dynamicRoutes(DiscoveryLocatorProperties dlp, ReactiveDiscoveryClient rdc) {
        return new DiscoveryClientRouteDefinitionLocator(rdc,dlp);
    }

    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }



}
