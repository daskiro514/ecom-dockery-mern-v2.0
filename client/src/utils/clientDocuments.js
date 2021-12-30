// import { fileUrl } from "./fileUrl"

export const documenetsPendingCheck = client => {
  var approvedDocumentsNumber = 0, pendingDocumentsNumber = 0
  if (client.einVerificationLetterStatus === 'Approved') approvedDocumentsNumber++
  if (client.articlesOfOrganizationStatus === 'Approved') approvedDocumentsNumber++
  if (client.w9Status === 'Approved') approvedDocumentsNumber++
  if (client.bankCardStatus === 'Approved') approvedDocumentsNumber++
  if (client.usDriversLicenseStatus === 'Approved') approvedDocumentsNumber++
  if (client.creditDebitCardFrontStatus === 'Approved') approvedDocumentsNumber++
  if (client.creditDebitCardBackStatus === 'Approved') approvedDocumentsNumber++

  pendingDocumentsNumber = 7 - approvedDocumentsNumber

  if (pendingDocumentsNumber === 0) return 'All Documents Approved'
  else return `${pendingDocumentsNumber} Documents Are Pending`
}

export const getDocumentList = client => {
  var documents = []
  documents.push({ 
    name: 'W8 or W9', 
    path: client['w9'],
    keyInDB: 'w9',
    status: client.w9Status,
  })
  documents.push({ 
    name: 'EIN Verification letter', 
    path: client['einVerificationLetter'], 
    keyInDB: 'einVerificationLetter',
    status: client.einVerificationLetterStatus,
  })
  documents.push({ 
    name: 'Articles Of Organization', 
    path: client['articlesOfOrganization'], 
    keyInDB: 'articlesOfOrganization',
    status: client.articlesOfOrganizationStatus,
  })
  documents.push({ 
    name: 'Bank Card', 
    path: client['bankCard'], 
    keyInDB: 'bankCard',
    status: client.bankCardStatus,
  })
  documents.push({ 
    name: 'US Drivers License', 
    path: client['usDriversLicense'], 
    keyInDB: 'usDriversLicense',
    status: client.usDriversLicenseStatus,
  })
  documents.push({ 
    name: 'Credit Debit Card Front', 
    path: client['creditDebitCardFront'], 
    keyInDB: 'creditDebitCardFront',
    status: client.creditDebitCardFrontStatus,
  })
  documents.push({ 
    name: 'Credit Debit Card Back', 
    path: client['creditDebitCardBack'], 
    keyInDB: 'creditDebitCardBack',
    status: client.creditDebitCardBackStatus,
  })

  return documents
}