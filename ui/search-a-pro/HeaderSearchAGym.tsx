'use client';
import { useState } from 'react';
import { RomaniaStatesData } from '#/data/location-data';
import SelectInput from '#/ui/shared/form/SelectInput';
import SectionWithWave from '#/ui/shared/SectionWithWave';
import ProList from '#/ui/shared/ProList';
import { flushSync } from 'react-dom';
import { executeScroll } from '#/helpers/scroll-to';
import { handleInputRequired } from '#/utils/helpers';
import { AuthError } from '#/constants/authError';
import { TypedGymDetails } from '#/types';
import clsx from 'clsx';
import { removeDuplicate } from '#/helpers/remove-duplicate';
import { useSupabase } from '#/ui/auth/SupabaseProvider';

export default function HeaderSearchAGym({
  gyms,
}: {
  gyms: TypedGymDetails[];
}) {
  const { supabase } = useSupabase();
  const [gymType, setGymType] = useState('');
  const [gymTypeError, setGymTypeError] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentStateError, setCurrentStateError] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentCityError, setCurrentCityError] = useState('');
  const [currentGyms, setCurrentGyms] = useState<TypedGymDetails[]>([]);
  const [showCurrentGyms, setShowCurrentGyms] = useState<boolean>(false);
  let currentCites: string[] = [];
  const gymTypesData = gyms.map((gym) => gym.pro_type as string);
  const gymStatesData = gyms.map((gym) => gym.state as string);
  const gymsTypes: string[] = removeDuplicate(gymTypesData);
  const states: string[] = removeDuplicate(gymStatesData);

  RomaniaStatesData.filter((state) => {
    if (state.name === currentState) {
      currentCites = state.cities;
    }
  });

  const findGyms = async () => {
    if (gymType && currentCity) {
      const { data: gyms } = await supabase
        .from('gyms')
        .select('*')
        .eq('pro_type', gymType)
        .eq('city', currentCity);

      // Will wait until the DOM is updated with the new state
      flushSync(() => {
        setCurrentGyms(gyms as TypedGymDetails[]);
        setShowCurrentGyms(true);
      });

      // Scroll to the trainer section where we see the trainers searched
      executeScroll('gyms-section');
    }
  };
  var city_names = [
    'Aberdeen',
    'Abilene',
    'Akron',
    'Albany',
    'Albuquerque',
    'Alexandria',
    'Allentown',
    'Amarillo',
    'Anaheim',
    'Anchorage',
    'Ann Arbor',
    'Antioch',
    'Apple Valley',
    'Appleton',
    'Arlington',
    'Arvada',
    'Asheville',
    'Athens',
    'Atlanta',
    'Atlantic City',
    'Augusta',
    'Aurora',
    'Austin',
    'Bakersfield',
    'Baltimore',
    'Barnstable',
    'Baton Rouge',
    'Beaumont',
    'Bel Air',
    'Bellevue',
    'Berkeley',
    'Bethlehem',
    'Billings',
    'Birmingham',
    'Bloomington',
    'Boise',
    'Boise City',
    'Bonita Springs',
    'Boston',
    'Boulder',
    'Bradenton',
    'Bremerton',
    'Bridgeport',
    'Brighton',
    'Brownsville',
    'Bryan',
    'Buffalo',
    'Burbank',
    'Burlington',
    'Cambridge',
    'Canton',
    'Cape Coral',
    'Carrollton',
    'Cary',
    'Cathedral City',
    'Cedar Rapids',
    'Champaign',
    'Chandler',
    'Charleston',
    'Charlotte',
    'Chattanooga',
    'Chesapeake',
    'Chicago',
    'Chula Vista',
    'Cincinnati',
    'Clarke County',
    'Clarksville',
    'Clearwater',
    'Cleveland',
    'College Station',
    'Colorado Springs',
    'Columbia',
    'Columbus',
    'Concord',
    'Coral Springs',
    'Corona',
    'Corpus Christi',
    'Costa Mesa',
    'Dallas',
    'Daly City',
    'Danbury',
    'Davenport',
    'Davidson County',
    'Dayton',
    'Daytona Beach',
    'Deltona',
    'Denton',
    'Denver',
    'Des Moines',
    'Detroit',
    'Downey',
    'Duluth',
    'Durham',
    'El Monte',
    'El Paso',
    'Elizabeth',
    'Elk Grove',
    'Elkhart',
    'Erie',
    'Escondido',
    'Eugene',
    'Evansville',
    'Fairfield',
    'Fargo',
    'Fayetteville',
    'Fitchburg',
    'Flint',
    'Fontana',
    'Fort Collins',
    'Fort Lauderdale',
    'Fort Smith',
    'Fort Walton Beach',
    'Fort Wayne',
    'Fort Worth',
    'Frederick',
    'Fremont',
    'Fresno',
    'Fullerton',
    'Gainesville',
    'Garden Grove',
    'Garland',
    'Gastonia',
    'Gilbert',
    'Glendale',
    'Grand Prairie',
    'Grand Rapids',
    'Grayslake',
    'Green Bay',
    'GreenBay',
    'Greensboro',
    'Greenville',
    'Gulfport-Biloxi',
    'Hagerstown',
    'Hampton',
    'Harlingen',
    'Harrisburg',
    'Hartford',
    'Havre de Grace',
    'Hayward',
    'Hemet',
    'Henderson',
    'Hesperia',
    'Hialeah',
    'Hickory',
    'High Point',
    'Hollywood',
    'Honolulu',
    'Houma',
    'Houston',
    'Howell',
    'Huntington',
    'Huntington Beach',
    'Huntsville',
    'Independence',
    'Indianapolis',
    'Inglewood',
    'Irvine',
    'Irving',
    'Jackson',
    'Jacksonville',
    'Jefferson',
    'Jersey City',
    'Johnson City',
    'Joliet',
    'Kailua',
    'Kalamazoo',
    'Kaneohe',
    'Kansas City',
    'Kennewick',
    'Kenosha',
    'Killeen',
    'Kissimmee',
    'Knoxville',
    'Lacey',
    'Lafayette',
    'Lake Charles',
    'Lakeland',
    'Lakewood',
    'Lancaster',
    'Lansing',
    'Laredo',
    'Las Cruces',
    'Las Vegas',
    'Layton',
    'Leominster',
    'Lewisville',
    'Lexington',
    'Lincoln',
    'Little Rock',
    'Long Beach',
    'Lorain',
    'Los Angeles',
    'Louisville',
    'Lowell',
    'Lubbock',
    'Macon',
    'Madison',
    'Manchester',
    'Marina',
    'Marysville',
    'McAllen',
    'McHenry',
    'Medford',
    'Melbourne',
    'Memphis',
    'Merced',
    'Mesa',
    'Mesquite',
    'Miami',
    'Milwaukee',
    'Minneapolis',
    'Miramar',
    'Mission Viejo',
    'Mobile',
    'Modesto',
    'Monroe',
    'Monterey',
    'Montgomery',
    'Moreno Valley',
    'Murfreesboro',
    'Murrieta',
    'Muskegon',
    'Myrtle Beach',
    'Naperville',
    'Naples',
    'Nashua',
    'Nashville',
    'New Bedford',
    'New Haven',
    'New London',
    'New Orleans',
    'New York',
    'New York City',
    'Newark',
    'Newburgh',
    'Newport News',
    'Norfolk',
    'Normal',
    'Norman',
    'North Charleston',
    'North Las Vegas',
    'North Port',
    'Norwalk',
    'Norwich',
    'Oakland',
    'Ocala',
    'Oceanside',
    'Odessa',
    'Ogden',
    'Oklahoma City',
    'Olathe',
    'Olympia',
    'Omaha',
    'Ontario',
    'Orange',
    'Orem',
    'Orlando',
    'Overland Park',
    'Oxnard',
    'Palm Bay',
    'Palm Springs',
    'Palmdale',
    'Panama City',
    'Pasadena',
    'Paterson',
    'Pembroke Pines',
    'Pensacola',
    'Peoria',
    'Philadelphia',
    'Phoenix',
    'Pittsburgh',
    'Plano',
    'Pomona',
    'Pompano Beach',
    'Port Arthur',
    'Port Orange',
    'Port Saint Lucie',
    'Port St. Lucie',
    'Portland',
    'Portsmouth',
    'Poughkeepsie',
    'Providence',
    'Provo',
    'Pueblo',
    'Punta Gorda',
    'Racine',
    'Raleigh',
    'Rancho Cucamonga',
    'Reading',
    'Redding',
    'Reno',
    'Richland',
    'Richmond',
    'Richmond County',
    'Riverside',
    'Roanoke',
    'Rochester',
    'Rockford',
    'Roseville',
    'Round Lake Beach',
    'Sacramento',
    'Saginaw',
    'Saint Louis',
    'Saint Paul',
    'Saint Petersburg',
    'Salem',
    'Salinas',
    'Salt Lake City',
    'San Antonio',
    'San Bernardino',
    'San Buenaventura',
    'San Diego',
    'San Francisco',
    'San Jose',
    'Santa Ana',
    'Santa Barbara',
    'Santa Clara',
    'Santa Clarita',
    'Santa Cruz',
    'Santa Maria',
    'Santa Rosa',
    'Sarasota',
    'Savannah',
    'Scottsdale',
    'Scranton',
    'Seaside',
    'Seattle',
    'Sebastian',
    'Shreveport',
    'Simi Valley',
    'Sioux City',
    'Sioux Falls',
    'South Bend',
    'South Lyon',
    'Spartanburg',
    'Spokane',
    'Springdale',
    'Springfield',
    'St. Louis',
    'St. Paul',
    'St. Petersburg',
    'Stamford',
    'Sterling Heights',
    'Stockton',
    'Sunnyvale',
    'Syracuse',
    'Tacoma',
    'Tallahassee',
    'Tampa',
    'Temecula',
    'Tempe',
    'Thornton',
    'Thousand Oaks',
    'Toledo',
    'Topeka',
    'Torrance',
    'Trenton',
    'Tucson',
    'Tulsa',
    'Tuscaloosa',
    'Tyler',
    'Utica',
    'Vallejo',
    'Vancouver',
    'Vero Beach',
    'Victorville',
    'Virginia Beach',
    'Visalia',
    'Waco',
    'Warren',
    'Washington',
    'Waterbury',
    'Waterloo',
    'West Covina',
    'West Valley City',
    'Westminster',
    'Wichita',
    'Wilmington',
    'Winston',
    'Winter Haven',
    'Worcester',
    'Yakima',
    'Yonkers',
    'York',
    'Youngstown',
  ];

  return (
    <>
      <section className="bg-noRepeat flex min-h-screen items-center bg-gray-700 bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center bg-blend-multiply">
        <div className="z-1 relative mx-auto max-w-screen-xl px-4 py-8 text-white lg:py-16 xl:px-0">
          <div className="mx-auto mb-6 flex max-w-screen-md flex-col justify-center text-center lg:mb-0">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-normal text-white md:text-5xl xl:text-6xl">
              Sali de antrenament
            </h1>
            <p className="mx-auto mb-6 max-w-xl font-light text-gray-300 md:text-lg xl:mb-8 xl:text-xl">
              Sala de antrenament îți poate oferi echipamentul și sprijinul
              personalului de care ai nevoie pentru a-ți atinge potențialul
              maxim.
            </p>
          </div>
          <div className="mt-8 flex w-full flex-wrap items-end justify-center rounded bg-gray-800 p-4 lg:mt-12">
            <div className="w-full">
              <SelectInput
                name="nutritionist-type"
                label="Tip de sala"
                value={gymType}
                placeholder="Gym Fit"
                options={gymsTypes}
                handleChange={(e) => {
                  setGymTypeError('');
                  setGymType(e.target.value);
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                  setCurrentState('');
                  setCurrentCity('');
                }}
                handleBlur={() => {
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                  setCurrentState('');
                  setCurrentCity('');
                  handleInputRequired(gymType)
                    ? setGymTypeError(AuthError.InputRequired)
                    : null;
                }}
                error={gymTypeError}
              />
            </div>
            <div className="mt-4 w-full">
              <SelectInput
                name="state"
                label="Județ"
                value={currentState}
                placeholder={'Bucuresti'}
                options={states}
                error={currentStateError}
                handleChange={(e) => {
                  setCurrentStateError('');
                  setCurrentState(e.target.value);
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                  setCurrentCity('');
                }}
                handleBlur={() => {
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                  setCurrentCity('');
                  handleInputRequired(currentState)
                    ? setCurrentStateError(AuthError.InputRequired)
                    : null;
                }}
              />
            </div>
            <div className="mt-4 w-full">
              <SelectInput
                name="city"
                label="Oraș / Sector"
                value={currentCity}
                placeholder={'Sectorul 1'}
                options={currentCites}
                handleChange={(e) => {
                  setCurrentCityError('');
                  setCurrentCity(e.target.value);
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                }}
                handleBlur={() => {
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                  handleInputRequired(currentCity)
                    ? setCurrentCityError(AuthError.InputRequired)
                    : null;
                }}
                error={currentCityError}
              />
            </div>
            <button
              onClick={findGyms}
              disabled={
                gymType === '' || currentState === '' || currentCity === ''
              }
              className={clsx(
                'mt-6 inline-flex h-fit w-full max-w-[400px] items-center justify-center justify-self-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:mx-auto',
                {
                  '!bg-gray-300 !text-gray-600':
                    gymType === '' || currentState === '' || currentCity === '',
                },
              )}
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              CAUTA
            </button>
          </div>
        </div>
      </section>

      <div id="gyms-section"></div>
      {showCurrentGyms ? (
        currentGyms.length > 0 ? (
          <SectionWithWave bgWhite={true}>
            <h2 className="mb-4 text-center text-3xl font-bold">
              Sali de antrenament <br /> in {currentCity}
            </h2>
            <ProList proList={currentGyms} isHome={false} />
          </SectionWithWave>
        ) : (
          <SectionWithWave bgWhite={true}>
            <h1>Nu s-au gasit aali de antrenament</h1>
          </SectionWithWave>
        )
      ) : null}
    </>
  );
}
