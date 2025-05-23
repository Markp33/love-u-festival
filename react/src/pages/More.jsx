export default function More() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-100 to-yellow-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full mt-12 mb-12 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Algemeen &amp; Contact</h1>
        <p className="mb-4 text-gray-700">
          Het <span className="font-bold text-red-500">❤️U Festival</span> is voor (nieuwe) studenten in de regio Utrecht en is een aanvulling op UIT.
        </p>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-red-500">Adres</h2>
          <div className="mb-1">Locatie: <span className="font-medium">Strijkviertel, Utrecht</span></div>
          <div>Navigatieadres: <span className="font-medium">Strijkviertelweg, Utrecht</span></div>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-red-500">Datum &amp; Openingstijden</h2>
          <div>Zaterdag 6 september 2025 - 12:00 tot 23:00 uur</div>
        </section>
        <hr className="my-6" />
        <h2 className="text-2xl font-bold mb-4 text-red-600">Bereikbaarheid</h2>
        <section className="mb-4">
          <h3 className="font-semibold text-red-500">Fiets</h3>
          <p className="text-gray-700">Er is een grote gratis fietsenstalling aanwezig waar je jouw fiets de gehele dag kunt stallen.</p>
        </section>
        <section className="mb-4">
          <h3 className="font-semibold text-red-500">Auto</h3>
          <p className="text-gray-700">
            Je kunt een parkingticket aanschaffen. Parkeren kan op P+R Papendorp, volg hiervoor de borden 'P online ticket'. Heb je geen ticket van te voren gekocht? Dan kun je bij de parkeerwachter op locatie een parkeerticket aanschaffen (PIN ONLY). Let wel op: VOL=VOL
          </p>
        </section>
        <section className="mb-4">
          <h3 className="font-semibold text-red-500">OV</h3>
          <p className="text-gray-700">
            Kom je met het openbaar vervoer naar Lief? Plan dan je trip via&nbsp;
            <a href="https://9292.nl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">9292.nl</a>.
          </p>
        </section>
        <section className="mb-4">
          <h3 className="font-semibold text-red-500">Shuttlebus</h3>
          <p className="text-gray-700">
            Vanaf Utrecht Centraal kun je onze gratis shuttlebus richting het festivalterrein pakken. Je vindt deze bus op het centraal station aan de Mineurslaan. Volg de witte bordjes met zwarte pijlen én '❤️U Festival'.<br />
            De bus rijdt tussen 12:00 uur &amp; 19:00 uur richting het festival en vanaf 21:00 uur kun je weer instappen om richting het station te gaan.
          </p>
        </section>
        <section className="mb-4">
          <h3 className="font-semibold text-red-500">Taxi + Kiss &amp; Ride</h3>
          <p className="text-gray-700">
            Navigeer naar Strijkviertel, De Meern (Utrecht). Volg de borden "Kiss &amp; Ride ❤️U Festival", zodra je in de buurt bent van het festivalterrein.
          </p>
        </section>
        <hr className="my-6" />
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-red-500">Lockers</h2>
          <p className="text-gray-700">
            Op het festivalterrein zijn kluisjes aanwezig waar je je spullen veilig kunt opbergen! Hier passen 3 à 4 jassen in. Je kunt je kluisje gedurende de hele dag openen en sluiten zo vaak je wilt. Het is niet mogelijk om online een kluisje te reserveren.
          </p>
        </section>
        <hr className="my-6" />
        <h2 className="text-2xl font-bold mb-4 text-red-600">FAQ</h2>
        <section className="mb-4">
          <h3 className="font-semibold text-red-500">Ik gebruik medicatie. Wat nu?</h3>
          <p className="text-gray-700">
            Het is toegestaan om medicijnen mee te nemen in een dosis die je maximaal nodig hebt op 1 dag. Een doktersverklaring/medicatiepaspoort is noodzakelijk. De beveiliging zal jouw documentatie beoordelen en de medicijnen controleren. Het kan zijn dat de EHBO jouw medicijnen (bijvoorbeeld als deze gevaarlijk zijn i.c.m. alcohol) in bewaring neemt en je deze enkel kan innemen bij de EHBO.
          </p>
        </section>
        <section className="mb-4">
          <h3 className="font-semibold text-red-500">Mag ik het festivalterrein tussentijds verlaten?</h3>
          <p className="text-gray-700">
            Nee, helaas is dat niet mogelijk. Om de veiligheid van alle bezoekers te kunnen waarborgen, kunnen we het niet toestaan dat het festivalterrein tussentijds verlaten wordt. Wij
                      </p>
        </section>
        <section className="mb-4">
          <h3 className="font-semibold text-red-500">Zijn er lockers?</h3>
          <p className="text-gray-700">
            Yes, deze zijn er! Op het terrein kun je medium &amp; grote lockers huren.
          </p>
        </section>
        <hr className="my-6" />
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-yellow-600">Golden-GLU</h2>
          <p className="text-gray-700">
            Studenten van het GLU hebben tijdens het festival speciale privileges en zijn herkenbaar aan een gouden armbandje.<br />
            Met dit gouden armbandje kunnen ze tijdens het festival gebruik maken van de gouden toiletten en met goud gemarkeerde bestelpunten aan de bars zonder in een rij te hoeven staan.
          </p>
        </section>
      </div>
    </div>
  );
}