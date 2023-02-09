import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";
import { Document } from "mongoose";

export class Pokemon extends Document {
    @Prop({
        unique: true,
        index: true
    })
    name: string
    @Prop({
        unique: true,
        index: true
    })
    nroPokemon: number
}
export const PokemonSchema = SchemaFactory.createForClass(Pokemon)
