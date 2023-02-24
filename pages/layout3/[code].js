
import {getAllCountries} from "@/lib/CountriesService";


export async function getServerSideProps (context) {
    const countries = await getAllCountries()
    const country = countries.find(item => item.code === context.params.code)
    return {props:{data:country}}
}

const Country = ({data}) => {
    return (
        <div>

            <ul className={'h-56 grid grid-cols-3 gap-4 content-start'}>
                <li>Country code: {data.code}</li>
                <li>Country Name: {data.name}</li>
                <li>Country Native: {data.native}</li>
                <li>Country Continent: {data.continent.name}</li>
                <li>Country Emoji: {data.emoji}</li>
                <li>Country Languages: {data.languages.map(language => {
                    return (<div key={language.code}>{language.code}</div>)
                }) }</li>
            </ul>

        </div>
    )
}

export default Country