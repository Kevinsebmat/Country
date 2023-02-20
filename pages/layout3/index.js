import Link from "next/link";
import { getAllCountries } from "@/lib/CountriesService";
import Image from "next/image";
import MyButton from "@/components/MyButton";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export async function getServerSideProps() {
  const countries = await getAllCountries();
  return { props: { data: countries } };
}

const Countries = ({ data }) => {
  return (
    <div className={"px-9 py-6 flex flex-col"}>
      <div className="grid grid-cols-3 gap-6">
        
        {data.map((country) => (
          <Card key={country.name} className="w-96 bg-gray-100 shadow-2xl">
            <CardHeader color="blue" className="relative h-56">
              <Image
                src={`https://countryflagsapi.com/png/${country.code}`}
                alt="img-blur-shadow"
                width={800}
                height={500}
              />
            </CardHeader>
            <CardBody className="text-center">
              <div> {country.name} {country.emoji} </div>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <div>
                
                Languages:
              </div>
              <div>
                
                {country.languages.map((language) => {
                  return <p key={language.code}> {language.name} </p>;
                })}
              </div>
            
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Countries;
