//the restTwo obj is of this interface type
export interface restTwoObj
{
  id:number,
  username:string,
  email:string,
  address:restTwoAddress,
  phone:string
}
interface restTwoAddress
{
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo:restTwoGeo

}
interface restTwoGeo
{
    lat:string,
    lng:string
}
