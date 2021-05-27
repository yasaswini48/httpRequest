//User interface 
export interface userType
{
    id:string;
    email:string;
    name:string;
    profilePic:string;
    address:address;
    profession:string;
    mobileno:string;
}
interface address
{
    city:string;
    state:string;
}