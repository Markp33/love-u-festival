import { useTranslation } from 'react-i18next';

export default function More() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-100 to-yellow-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full mt-12 mb-12 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-600">{t('title')}</h1>
        <p className="mb-4 text-gray-700">
          {t('festivalInfo')}
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-red-500">{t('address')}</h2>
          <div className="mb-1">{t('location', { location: 'Strijkviertel, Utrecht' })}</div>
          <div>{t('navAddress', { address: 'Strijkviertelweg, Utrecht' })}</div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-red-500">{t('dateTitle')}</h2>
          <div>{t('date')}</div>
        </section>

        <hr className="my-6" />
        <h2 className="text-2xl font-bold mb-4 text-red-600">{t('accessibility')}</h2>

        <section className="mb-4">
          <h3 className="font-semibold text-red-500">{t('bike')}</h3>
          <p className="text-gray-700">{t('bikeInfo')}</p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold text-red-500">{t('car')}</h3>
          <p className="text-gray-700">{t('carInfo')}</p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold text-red-500">{t('ov')}</h3>
          <p className="text-gray-700">
            {t('ovInfo')}&nbsp;
            <a
              href="https://9292.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              9292.nl
            </a>
            .
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold text-red-500">{t('shuttle')}</h3>
          <p className="text-gray-700">{t('shuttleInfo')}</p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold text-red-500">{t('taxi')}</h3>
          <p className="text-gray-700">{t('taxiInfo')}</p>
        </section>

        <hr className="my-6" />
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-red-500">{t('lockers')}</h2>
          <p className="text-gray-700">{t('lockersInfo')}</p>
        </section>

        <hr className="my-6" />
        <h2 className="text-2xl font-bold mb-4 text-red-600">{t('faq')}</h2>

        <section className="mb-4">
          <h3 className="font-semibold text-red-500">{t('meds')}</h3>
          <p className="text-gray-700">{t('medsInfo')}</p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold text-red-500">{t('reentry')}</h3>
          <p className="text-gray-700">{t('reentryInfo')}</p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold text-red-500">{t('lockersAgain')}</h3>
          <p className="text-gray-700">{t('lockersAgainInfo')}</p>
        </section>

        <hr className="my-6" />
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-yellow-600">{t('glu')}</h2>
          <p className="text-gray-700">{t('gluInfo')}</p>
        </section>
      </div>
    </div>
  );
}
