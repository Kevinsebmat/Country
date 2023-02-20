
import {getAllCountries} from "@/lib/CountriesService";
import Link from "next/link";
import MyButton from "@/components/MyButton"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";



export async function getServerSideProps (context) {
    const countries = await getAllCountries()
    const country = countries.find(item => item.code === context.params.code)
    return {props:{data:country}}
}
 
const Country = ({data}) => {
    return (
      
       <div className="grid h-screen place-items-center px-4 py-5 flex flex-col bg-gray-400">
       <Card key={data.name} className="w-96 bg-gray-100 shadow-2xl">
            <CardHeader className="relative h-59">

            <Image
                src={`https://countryflagsapi.com/png/${data.code}`}
                alt="img-blur-shadow"
                width={800}
                height={500}
              />
            </CardHeader>
            <CardBody className="text-center">
              
              <div> {data.name} {data.emoji} </div>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <div variant="h1" color="blue">
                
                Languages:
              </div>
              <div variant="small">
                
                {data.languages.map((language) => {
                  return <div key={language.code}> {language.name} </div>;
                })}
              </div>
              {}
            </CardFooter>
          </Card>
          </div>
    )
}

export default Country