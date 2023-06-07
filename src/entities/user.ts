import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "./role";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id  : number;
    @Column({type: "varchar", length: 255})
    name: string;
    @Column()
    phoneNumber : number;
    @Column({type: "varchar", length: 255, default: ""})
    address: string;
    @Column({type: "varchar", length: 255})
    username: string;
    @Column({type: "varchar", length: 255})
    password: string;
    @ManyToOne(()=> Role, (role)=> role.users) // cột này tham chiếu tới bảng Role thông qua cột users
    role : boolean;
}
