import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left text-red-600 font-semibold"
      >
        {title}
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && <div className="pb-4 text-gray-700">{children}</div>}
    </div>
  );
}

export default function More() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-100 to-yellow-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full mt-12 mb-12 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-600">{t('title')}</h1>
        <p className="mb-4 text-gray-700">{t('festivalInfo')}</p>

        <AccordionItem title={t('address')}>
          <div className="mb-1">{t('location', { location: 'Strijkviertel, Utrecht' })}</div>
          <div>{t('navAddress', { address: 'Strijkviertelweg, Utrecht' })}</div>
        </AccordionItem>

        <AccordionItem title={t('dateTitle')}>
          <div>{t('date')}</div>
        </AccordionItem>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-red-600">{t('accessibility')}</h2>

        <AccordionItem title={t('bike')}>
          <p>{t('bikeInfo')}</p>
        </AccordionItem>

        <AccordionItem title={t('car')}>
          <p>{t('carInfo')}</p>
        </AccordionItem>

        <AccordionItem title={t('ov')}>
          <p>
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
        </AccordionItem>

        <AccordionItem title={t('shuttle')}>
          <p>{t('shuttleInfo')}</p>
        </AccordionItem>

        <AccordionItem title={t('taxi')}>
          <p>{t('taxiInfo')}</p>
        </AccordionItem>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-red-500">{t('lockers')}</h2>
        <p className="mb-4 text-gray-700">{t('lockersInfo')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-red-600">{t('faq')}</h2>

        <AccordionItem title={t('meds')}>
          <p>{t('medsInfo')}</p>
        </AccordionItem>

        <AccordionItem title={t('reentry')}>
          <p>{t('reentryInfo')}</p>
        </AccordionItem>

        <AccordionItem title={t('lockersAgain')}>
          <p>{t('lockersAgainInfo')}</p>
        </AccordionItem>

        <AccordionItem title={t('glu')}>
          <p>{t('gluInfo')}</p>
        </AccordionItem>
      </div>
    </div>
  );
}
