import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";

@ArgsType()
export class CreateRestaurantDto {
    @Field(() => String)
    @IsString()
    @Length(5,10)
    name: string
    @Field(()=> Boolean)
    @IsBoolean()
    isVegan? : boolean
    @Field(()=> String)
    @IsString()
    ownersName: string
    @Field(()=> String)
    @IsString()
    address: string
}