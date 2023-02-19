
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
       <div class="grid h-screen place-items-center">
        <MyButton href="/layout2" appendClass="animate-bounceLight">Back to List</MyButton>

       <Card key={data.name} className="w-96 bg-gray-100 shadow-2xl">
            <CardHeader color="blue" className="relative h-56">
            <Image
                src={`https://countryflagsapi.com/png/${data.code}`}
                alt="img-blur-shadow"
                width={800}
                height={500}
              />{" "}
            </CardHeader>{" "}
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                {" "}
              </Typography>{" "}
              <Typography> {data.name} {data.emoji}{" "} </Typography>{" "}
            </CardBody>{" "}
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography variant="h1" color="blue" textGradient>
                {" "}
                Languages:{" "}
              </Typography>{" "}
              <Typography variant="small">
                {" "}
                {data.languages.map((language) => {
                  return <div key={language.code}> {language.name} </div>;
                })}{" "}
              </Typography>{" "}
              {/* <Typography variant="small" color="gray" className="flex gap-1">
                                                                                                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                                                                                                Barcelona, Spain{" "}
                                                                                              </Typography>{" "} */}{" "}
            </CardFooter>{" "}
          </Card>
          </div>
    )
}

export default Country