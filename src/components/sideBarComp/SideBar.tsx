'use client';

import {
    ChevronDown
} from "lucide-react";

import styles from './sideBarStyle/sideBar.module.scss';

import {
    AccountLogo,
    Audits,
    BriefCase,
    CoinLogo,
    DashLogo,
    Fees,
    GurantorLogo,
    HandShakeLogo,
    KarmaLogo,
    LoanLogo,
    MoneyLogo,
    PiggyLogo,
    Prefrence,
    Reports,
    SavingLogo,
    ServiceLogo,
    Settlement,
    Transactions,
    UserLogo,
    WhiteListLogo
} from "../svgComp/AllSvgComp";

export function SideBar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__item}>
                <BriefCase />
                <p className={styles.sidebar__text}>Switch Organisation</p>
                <ChevronDown className={styles.sidebar__icon} />
            </div>

            <div className={styles.sidebar__item}>
                <DashLogo />
                <p className={styles.sidebar__text}>Dashboard</p>
            </div>

            <div className={styles.sidebar__section}>
                <h1 className={styles.sidebar__header}>CUSTOMERS</h1>
                <div className={styles.sidebar__item}>
                    <UserLogo />
                    <p className={styles.sidebar__text}>Users</p>
                </div>
                <div className={styles.sidebar__item}>
                    <GurantorLogo />
                    <p className={styles.sidebar__text}>Guarantors</p>
                </div>
                <div className={styles.sidebar__item}>
                    <LoanLogo />
                    <p className={styles.sidebar__text}>Loans</p>
                </div>
                <div className={styles.sidebar__item}>
                    <HandShakeLogo />
                    <p className={styles.sidebar__text}>Decision Models</p>
                </div>
                <div className={styles.sidebar__item}>
                    <PiggyLogo />
                    <p className={styles.sidebar__text}>Savings</p>
                </div>
                <div className={styles.sidebar__item}>
                    <MoneyLogo />
                    <p className={styles.sidebar__text}>Loan Requests</p>
                </div>
                <div className={styles.sidebar__item}>
                    <WhiteListLogo />
                    <p className={styles.sidebar__text}>Whitelist</p>
                </div>
                <div className={styles.sidebar__item}>
                    <KarmaLogo />
                    <p className={styles.sidebar__text}>Karma</p>
                </div>
            </div>

            <div className={styles.sidebar__section}>
                <h1 className={styles.sidebar__header}>BUSINESSES</h1>
                <div className={styles.sidebar__item}>
                    <BriefCase />
                    <p className={styles.sidebar__text}>Organisation</p>
                </div>
                <div className={styles.sidebar__item}>
                    <MoneyLogo />
                    <p className={styles.sidebar__text}>Loan Products</p>
                </div>
                <div className={styles.sidebar__item}>
                    <SavingLogo />
                    <p className={styles.sidebar__text}>Savings Products</p>
                </div>
                <div className={styles.sidebar__item}>
                    <CoinLogo />
                    <p className={styles.sidebar__text}>Fees and Charges</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Transactions />
                    <p className={styles.sidebar__text}>Transactions</p>
                </div>
                <div className={styles.sidebar__item}>
                    <ServiceLogo />
                    <p className={styles.sidebar__text}>Services</p>
                </div>
                <div className={styles.sidebar__item}>
                    <AccountLogo />
                    <p className={styles.sidebar__text}>Services Account</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Settlement />
                    <p className={styles.sidebar__text}>Settlements</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Reports />
                    <p className={styles.sidebar__text}>Reports</p>
                </div>
            </div>

            <div className={styles.sidebar__section}>
                <h1 className={styles.sidebar__header}>SETTINGS</h1>
                <div className={styles.sidebar__item}>
                    <Prefrence />
                    <p className={styles.sidebar__text}>Preferences</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Fees />
                    <p className={styles.sidebar__text}>Fees and Price</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Audits />
                    <p className={styles.sidebar__text}>Audit Logs</p>
                </div>
            </div>
        </div>
    )
}