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
    <div className={"px-4 py-5 flex flex-col"}>
                 <MyButton href="/" appendClass="animate-bounceLight">Home</MyButton>

      <div className="grid grid-cols-3 gap-6">
        {" "}
        {data.map((country) => (
          <Card key={country.name} className="w-96 bg-gray-100 shadow-2xl">
            <CardHeader color="blue" className="relative h-56">
              <Image
                src={`https://countryflagsapi.com/png/${country.code}`}
                alt="img-blur-shadow"
                width={800}
                height={500}
              />{" "}
            </CardHeader>{" "}
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                {" "}
              </Typography>{" "}
              <Typography> {country.name} {country.emoji}{" "} </Typography>{" "}
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
                {country.languages.map((language) => {
                  return <div key={language.code}> {language.name} </div>;
                })}{" "}
              </Typography>{" "}
              {/* <Typography variant="small" color="gray" className="flex gap-1">
                                                                                                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                                                                                                Barcelona, Spain{" "}
                                                                                              </Typography>{" "} */}{" "}
            </CardFooter>{" "}
          </Card>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Countries;
