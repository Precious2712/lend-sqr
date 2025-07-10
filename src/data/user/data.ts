////////////////
interface personalInformations {
    bvn: string;
    children: string;
    emailAddress: string;
    fullName: string;
    gender: string;
    maritalStatus: string;
    phoneNumber: string;
    typeOfApartment: string;
}

interface educationAndEmployments {
    duration: string;
    employementStatus: string;
    levelOfEducation: string;
    loanRepayment: string;
    monthlyIncome: string;
    officeEmail: string;
    sectorOfEmployement: string;
}

interface social {
    facebook: string;
    instagram: string;
    twitter: string;
}

interface guarantors {
    emailAddress: string;
    fullName: string;
    phoneNumber: string;
    relationship: string;
}

export interface UserData {
    personalInformation: personalInformations;
    educationAndEmployement: educationAndEmployments;
    socials: social;
    guarantor: guarantors;
}

export type Information = UserData;