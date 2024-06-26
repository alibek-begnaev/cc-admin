import React, { useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import { userData } from '../pre-built/user-manage/UserData'

export const LendoContext = createContext()
const testData = [
  {
    client_id: '4652049',
    client_code: '62354993',
    client_uid: '7089238',
    family_name: 'ALIMOVA',
    name: 'XALIDA',
    patronymic: 'RAIMOVNA',
    pinfl: '41905610580023',
    document_type: '6',
    document_serial: 'AA',
    document_number: '3766613',
    document_issue_date: '27.12.2013',
    document_expire_date: '26.12.2023',
    document_issue_place: 'МИРЗОУЛУГБЕКСКИЙ РУВД ГОРОДА ТАШКЕНТА',
    document_region: '26',
    gender: '2',
    birth_date: '19.05.1961',
    birth_country_id: '860',
    residence_region_id: '26',
    residence_country_id: '860',
    residence_district_id: '201',
    birth_place: 'TOSHKENT',
    citizenship: '860',
    residence_address: 'М.Улугбек туман, Лашкарлар 8/35',
    email: 'test@mail.ru',
    phone: '998909255620',
    bxm: '1037',
    created_at: '2023-09-22T06:54:28.000+00:00',
    updated_at: '2023-09-22T06:54:29.000+00:00',
    checked: false,
  },
  {
    client_id: '4671505',
    client_code: '62372183',
    client_uid: '7183934',
    family_name: 'ALIMOV',
    name: 'SARVAR',
    patronymic: 'RAXIMJONOVICH',
    pinfl: '31005880060036',
    document_type: '0',
    document_serial: 'AD',
    document_number: '4100276',
    document_issue_date: '28.07.2023',
    document_expire_date: '27.07.2033',
    document_issue_place: 'МИРЗОУЛУГБЕКСКИЙ РУВД ГОРОДА ТАШКЕНТА',
    document_region: '26',
    gender: '1',
    birth_date: '10.05.1988',
    birth_country_id: '860',
    residence_region_id: '26',
    residence_country_id: '860',
    residence_district_id: '201',
    birth_place: 'TOSHKENT',
    citizenship: '860',
    residence_address: 'М.Улугбек туман, Лашкарлар 8/35',
    email: 'test@mail.ru',
    phone: '998909255627',
    bxm: '1037',
    created_at: '2023-09-15T09:57:19.000+00:00',
    updated_at: '2023-09-15T09:57:19.000+00:00',
    checked: false,
  },
  {
    client_id: '4677401',
    client_code: '62377475',
    client_uid: '7210504',
    family_name: 'ALIMOV',
    name: 'RAKHIMJON',
    patronymic: 'XAKIMOVICH',
    pinfl: '30208600580042',
    document_type: '0',
    document_serial: 'AA',
    document_number: '9340023',
    document_issue_date: '14.04.2015',
    document_expire_date: '13.04.2025',
    document_issue_place: 'МИРЗО-УЛУГБЕКСКИЙ РУВД ГОРОДА ТАШКЕНТА',
    document_region: '26',
    gender: '1',
    birth_date: '02.08.1960',
    birth_country_id: '860',
    residence_region_id: '26',
    residence_country_id: '860',
    residence_district_id: '201',
    birth_place: 'TOSHKENT VILOYATI',
    citizenship: '860',
    residence_address: 'Алпомиш МФЙ, Лашкарлар кучаси, 8-уй, 35-хонадон',
    email: 'test!#WD@mail.com',
    phone: '998909255620',
    bxm: '1037',
    created_at: '2023-09-15T11:33:50.000+00:00',
    updated_at: '2023-09-15T11:33:51.000+00:00',
    checked: false,
  },
  {
    client_id: '1717343',
    client_code: '60597776',
    client_uid: '1105793',
    family_name: 'HUSANOV',
    name: 'AZIZBEK',
    patronymic: "ABDUMUTAL O'G'LI",
    pinfl: '31508944140049',
    document_type: '6',
    document_serial: 'AA',
    document_number: '6041951',
    document_issue_date: '25.06.2014',
    document_expire_date: '24.06.2024',
    document_issue_place: 'АЛТЫАРЫКСКИЙ РОВД ФЕРГАНСКОЙ ОБЛАСТИ',
    document_region: '26',
    gender: '1',
    birth_date: '15.08.1994',
    birth_country_id: '860',
    residence_region_id: '26',
    residence_country_id: '860',
    residence_district_id: '200',
    birth_place: 'OLTIARIQ TUMANI',
    citizenship: '860',
    residence_address: 'Олтарик тумани Файзиобод Дилкушо',
    email: 'test1@mail.ru',
    phone: '998913269420',
    bxm: '1037',
    created_at: '2023-09-01T10:07:16.000+00:00',
    updated_at: '2023-09-01T11:01:49.000+00:00',
    checked: false,
  },
]
export const Loader = createContext()
export const LendoContextProvider = (props) => {
  const [data, setData] = useState()
  const value = React.useMemo(() => [data, setData], [data])
  const [loader, setLoader] = useState(false)

  return (
    <Loader.Provider value={[loader, setLoader]}>
      <LendoContext.Provider value={{ contextData: value }}>
        <Outlet />
      </LendoContext.Provider>
    </Loader.Provider>
  )
}
