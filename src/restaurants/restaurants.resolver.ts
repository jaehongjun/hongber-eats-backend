import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dtos/create-restaurants.dto";
import { Restaurant } from "./entities/restaurant.entiti";


@Resolver(of => Restaurant)
export class RestaurantsResolver{
    @Query(()=> [Restaurant])
    restaurant(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
        console.log(veganOnly)
        return []
    }
    @Mutation(()=> Boolean)
    createResturants(
        @Args() createRestaurantDto: CreateRestaurantDto,
    ) :boolean {
        console.log(createRestaurantDto);        
        return true
    }
}