import Link from "next/link";
import {getAllCountries} from "@/lib/CountriesService";
import MyButton from "@/components/MyButton"
import { Button } from "@material-tailwind/react";

export async function getServerSideProps () {
    const countries = await getAllCountries()
    return {props:{data:countries}}
}

const Countries = ({data}) => {

    return (
        <div className={'px-4 py-5 flex flex-col bg-gray-400'}>
        <div>
        </div>
        <div> </div>
            <table>
                <thead class="bg-white border-b sticky top-0 text-left ">
                <tr>
                    <th>Country (Click for Details)</th>
                </tr>
                </thead>
                <tbody>
                {data.map((country) => (
                    <tr class="even:bg-amber-9 odd:bg-blue-200" key={country.code}>
                        <td>
                            <Link href={`/layout2/${encodeURIComponent(country.code)}`} class="px-2 py-0 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200">

                            {country.name}
                        </Link>
                        </td>
                        
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )
}

export default Countries



