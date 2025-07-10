'use client'

import { MoveLeft, Star, UserRound } from "lucide-react"
import { useAppContext } from "../useContext/Context"
import styles from './details/detail.module.scss'

export function UserCompDetails() {
    const { userData } = useAppContext();

    return (
        <div className={styles.userDetailsContainer}>
            <div className={styles.backButton}>
                <MoveLeft />
                <p>Back to Users</p>
            </div>

            <div className={styles.headerSection}>
                <h1 className={styles.title}>User Details</h1>

                <div className={styles.actionButtons}>
                    <button className={styles.blacklistButton}>BLACKLIST USER</button>
                    <button className={styles.activateButton}>ACTIVATE USER</button>
                </div>
            </div>

            <div className={styles.userProfileCard}>
                <div className={styles.profileSection}>
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}>
                            <UserRound />
                        </div>
                        <div className={styles.nameInfo}>
                            <h1 className={styles.name}>{userData?.personalInformation?.fullName || 'Grace Effiom'}</h1>
                            <p className={styles.accountNumber}>{userData?.personalInformation?.phoneNumber || 'LSQF587g90'}</p>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.tierSection}>
                        <p className={styles.tierLabel}>User's Tier</p>
                        <div className={styles.stars}>
                            <Star className={styles.filledStar} />
                            <Star className={styles.emptyStar} />
                            <Star className={styles.emptyStar} />
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.balanceSection}>
                        <h1 className={styles.amount}>₦{'200,000.00'}</h1>
                        <p className={styles.bankInfo}>{ '9912345678/Providus Bank'}</p>
                    </div>
                </div>

                <div className={styles.tabsSection}>
                    <div className={styles.tabsContainer}>
                        <button className={styles.activeTab}>General Details</button>
                        <button className={styles.inactiveTab}>Documents</button>
                        <button className={styles.inactiveTab}>Bank Details</button>
                        <button className={styles.inactiveTab}>Loans</button>
                        <button className={styles.inactiveTab}>Savings</button>
                        <button className={styles.inactiveTab}>App and System</button>
                    </div>
                </div>
            </div>

            <div className={styles.detailsCard}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Personal Information</h2>
                    <div className={`${styles.gridContainer} ${styles.personalInfoSection}`}>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>FULL NAME</p>
                            <p className={styles.value}>{userData?.personalInformation?.fullName || 'Grace Effiom'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>PHONE NUMBER</p>
                            <p className={styles.value}>{userData?.personalInformation?.phoneNumber || '07060780922'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>EMAIL ADDRESS</p>
                            <p className={styles.value}>{userData?.personalInformation?.emailAddress || 'grace@gmail.com'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>BVN</p>
                            <p className={styles.value}>{userData?.personalInformation?.bvn || '07060780922'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>GENDER</p>
                            <p className={styles.value}>{userData?.personalInformation?.gender || 'Female'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>MARITAL STATUS</p>
                            <p className={styles.value}>{userData?.personalInformation?.maritalStatus || 'Single'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>CHILDREN</p>
                            <p className={styles.value}>{userData?.personalInformation?.children || 'None'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>TYPE OF RESIDENCE</p>
                            <p className={styles.value}>{userData?.personalInformation?.typeOfApartment || "Parent's Apartment"}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education and Employment</h2>
                    <div className={styles.gridContainerTwo}>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>LEVEL OF EDUCATION</p>
                            <p className={styles.value}>{userData?.educationAndEmployement?.levelOfEducation || 'B.Sc'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>EMPLOYMENT STATUS</p>
                            <p className={styles.value}>{userData?.educationAndEmployement?.employementStatus || 'Employed'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>SECTOR OF EMPLOYMENT</p>
                            <p className={styles.value}>{userData?.educationAndEmployement?.sectorOfEmployement || 'FinTech'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>DURATION OF EMPLOYMENT</p>
                            <p className={styles.value}>{userData?.educationAndEmployement?.duration || '2 years'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>OFFICE EMAIL</p>
                            <p className={styles.value}>{userData?.educationAndEmployement?.officeEmail || 'grace@lendsqr.com'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>MONTHLY INCOME</p>
                            <p className={styles.value}>{userData?.educationAndEmployement?.monthlyIncome || '₦200,000.00 - ₦400,000.00'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>LOAN REPAYMENT</p>
                            <p className={styles.value}>{userData?.educationAndEmployement?.loanRepayment || '₦40,000.00'}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Socials</h2>
                    <div className={styles.gridContainer}>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>TWITTER</p>
                            <p className={styles.value}>{userData?.socials?.twitter || '@grace_effiom'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>FACEBOOK</p>
                            <p className={styles.value}>{userData?.socials?.facebook || 'Grace Effiom'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>INSTAGRAM</p>
                            <p className={styles.value}>{userData?.socials?.instagram || '@grace_effiom'}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Guarantor</h2>
                    <div className={styles.gridContainer}>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>FULL NAME</p>
                            <p className={styles.value}>{userData?.guarantor?.fullName || 'Debby Ogana'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>PHONE NUMBER</p>
                            <p className={styles.value}>{userData?.guarantor?.phoneNumber || '07060780922'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>EMAIL ADDRESS</p>
                            <p className={styles.value}>{userData?.guarantor?.emailAddress || 'debby@gmail.com'}</p>
                        </div>
                        <div className={styles.gridItem}>
                            <p className={styles.label}>RELATIONSHIP</p>
                            <p className={styles.value}>{userData?.guarantor?.relationship || 'Sister'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}