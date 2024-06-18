export const filterDatas = {
  id: '',
  familyName: '',
  name: '',
  patronymic: '',
  pinfl: '',
  documentType: '',
  documentSerial: '',
  documentNumber: '',
  documentIssueDate: '',
  documentExpireDate: '',
  documentIssuePlace: '',
  documentRegion: '',
  gender: '',
  birthDate: '',
  birthCountryId: '',
  residenceRegionId: '',
  residenceCountryId: '',
  residenceDistrictId: '',
  birthPlace: '',
  citizenship: '',
  residenceAddress: '',
  phone: '',
  cardNumber: '',
  cardExpiry: '',
  cardType: '',
  state: '',
  message: '',
  uid: '',
  createdAt: '',
  updatedA: '',
  itemPerPage: 25,
}

export const sortDatas = [
  { orderNum: '', className: 'id', order: 'ASC', checked: false },
  { orderNum: '', className: 'familyName', order: 'ASC', checked: false },
  { orderNum: '', className: 'name', order: 'ASC', checked: false },
  { orderNum: '', className: 'patronymic', order: 'ASC', checked: false },
  { orderNum: '', className: 'pinfl', order: 'ASC', checked: false },
  { orderNum: '', className: 'documentType', order: 'ASC', checked: false },
  { orderNum: '', className: 'documentSerial', order: 'ASC', checked: false },
  { orderNum: '', className: 'documentNumber', order: 'ASC', checked: false },
  {
    orderNum: '',
    className: 'documentIssueDate',
    order: 'ASC',
    checked: false,
  },
  {
    orderNum: '',
    className: 'documentExpireDate',
    order: 'ASC',
    checked: false,
  },
  {
    orderNum: '',
    className: 'documentIssuePlace',
    order: 'ASC',
    checked: false,
  },
  { orderNum: '', className: 'documentRegion', order: 'ASC', checked: false },
  { orderNum: '', className: 'gender', order: 'ASC', checked: false },
  { orderNum: '', className: 'birthDate', order: 'ASC', checked: false },
  { orderNum: '', className: 'birthCountryId', order: 'ASC', checked: false },
  {
    orderNum: '',
    className: 'residenceRegionId',
    order: 'ASC',
    checked: false,
  },
  {
    orderNum: '',
    className: 'residenceCountryId',
    order: 'ASC',
    checked: false,
  },
  {
    orderNum: '',
    className: 'residenceDistrictId',
    order: 'ASC',
    checked: false,
  },
  { orderNum: '', className: 'birthPlace', order: 'ASC', checked: false },
  { orderNum: '', className: 'citizenship', order: 'ASC', checked: false },
  { orderNum: '', className: 'residenceAddress', order: 'ASC', checked: false },
  { orderNum: '', className: 'phone', order: 'ASC', checked: false },
  { orderNum: '', className: 'cardNumber', order: 'ASC', checked: false },
  { orderNum: '', className: 'cardExpiry', order: 'ASC', checked: false },
  { orderNum: '', className: 'cardType', order: 'ASC', checked: false },
  { orderNum: '', className: 'state', order: 'ASC', checked: false },
  { orderNum: '', className: 'message', order: 'ASC', checked: false },
  { orderNum: '', className: 'uid', order: 'ASC', checked: false },
  { orderNum: '', className: 'createdAt', order: 'ASC', checked: false },
  { orderNum: '', className: 'updatedA', order: 'ASC', checked: false },
]

export const filterStatus = [
  { value: 'empty', label: '' },
  { value: 'CREATE', label: 'CREATE' },
  { value: 'SCORING', label: 'SCORING' },
  { value: 'LIMIT_PROCESS', label: 'LIMIT_PROCESS' },
  { value: 'LIMIT_ERROR', label: 'LIMIT_ERROR' },
  { value: 'LIMITED', label: 'LIMITED' },
  { value: 'ACCEPTED', label: 'ACCEPTED' },
  { value: 'CONFIRMED', label: 'CONFIRMED' },
  { value: 'ERROR', label: 'ERROR' },
  { value: 'REFUSE', label: 'REFUSE' },
  { value: 'SUCCESS', label: 'SUCCESS' },
]

export const filterRole = [
  { value: 'investor', label: 'Investor' },
  { value: 'seller', label: 'Seller' },
  { value: 'buyer', label: 'Buyer' },
]
export const filterCardType = [
  { value: 'empty', label: '' },
  { value: 'UZCARD', label: 'UZCARD' },
  { value: 'HUMO', label: 'HUMO' },
]

export const sortOptions = [
  { value: 'ASC', label: 'ASC' },
  { value: 'DESC', label: 'DESC' },
]