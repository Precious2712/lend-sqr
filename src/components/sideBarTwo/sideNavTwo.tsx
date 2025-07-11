'use client';

import {
    ChevronDown,
    LogOut
} from "lucide-react";

import styles from './sideNavCss/SideNavTwo.module.scss';

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
    Settings,
    Settlement,
    Transactions,
    UserLogo,
    WhiteListLogo
} from "../svgComp/AllSvgComp";

export function SideNavTwo() {
    return (
        <div className={styles.sideNavContainer}>
            <div className={styles.menuItem}>
                <BriefCase />
                <p>Switch Organisation</p>
                <ChevronDown className={styles.icon} />
            </div>

            <div className={styles.menuItem}>
                <DashLogo />
                <p>Dashboard</p>
            </div>

            <div className={styles.menuSection}>
                <h1>CUSTOMERS</h1>
                <div className={styles.menuItem}>
                    <UserLogo />
                    <p>Users</p>
                </div>
                <div className={styles.menuItem}>
                    <GurantorLogo />
                    <p>Guarantors</p>
                </div>
                <div className={styles.menuItem}>
                    <LoanLogo />
                    <p>Loans</p>
                </div>
                <div className={styles.menuItem}>
                    <HandShakeLogo />
                    <p>Decision Models</p>
                </div>
                <div className={styles.menuItem}>
                    <PiggyLogo />
                    <p>Savings</p>
                </div>
                <div className={styles.menuItem}>
                    <MoneyLogo />
                    <p>Loan Requests</p>
                </div>
                <div className={styles.menuItem}>
                    <WhiteListLogo />
                    <p>Whitelist</p>
                </div>
                <div className={styles.menuItem}>
                    <KarmaLogo />
                    <p>Karma</p>
                </div>
            </div>

            <div className={styles.menuSection}>
                <h1>BUSINESSES</h1>
                <div className={styles.menuItem}>
                    <BriefCase />
                    <p>Organisation</p>
                </div>
                <div className={styles.menuItem}>
                    <MoneyLogo />
                    <p>Loan Products</p>
                </div>
                <div className={styles.menuItem}>
                    <SavingLogo />
                    <p>Savings Products</p>
                </div>
                <div className={styles.menuItem}>
                    <CoinLogo />
                    <p>Fees and Charges</p>
                </div>
                <div className={styles.menuItem}>
                    <Transactions />
                    <p>Transactions</p>
                </div>
                <div className={styles.menuItem}>
                    <ServiceLogo />
                    <p>Services</p>
                </div>
                <div className={styles.menuItem}>
                    <AccountLogo />
                    <p>Services Account</p>
                </div>
                <div className={styles.menuItem}>
                    <Settlement />
                    <p>Settlements</p>
                </div>
                <div className={styles.menuItem}>
                    <Reports />
                    <p>Reports</p>
                </div>
            </div>

            <div className={styles.menuSection}>
                <h1>SETTINGS</h1>
                <div className={styles.menuItem}>
                    <Prefrence />
                    <p>Preferences</p>
                </div>
                <div className={styles.menuItem}>
                    <Fees />
                    <p>Fees and Price</p>
                </div>
                <div className={styles.menuItem}>
                    <Audits />
                    <p>Audit Logs</p>
                </div>
                <div className={styles.menuItem}>
                    <Settings />
                    <p>Systems Messages</p>
                </div>
            </div>

            <div className={styles.divider}>
                <hr />
                <div className={styles.menuItem}>
                    <LogOut className={styles.icon} />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}