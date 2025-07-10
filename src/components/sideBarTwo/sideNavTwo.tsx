'use client';

import {
    ChevronDown,
    BriefcaseBusiness,
    HandCoins,
    Handshake,
    House,
    Landmark,
    PiggyBank,
    SquareUserRound,
    Trash,
    UserPen,
    Users,
    CirclePoundSterling,
    ArrowRightLeft,
    Star,
    Layers2,
    BookDown,
    ChartNoAxesGantt,
    BadgePercent,
    ShieldBan,
    ShipWheel,
    LogOut
} from "lucide-react";
import styles from './sideNavCss/SideNavTwo.module.scss';

export function SideNavTwo() {
    return (
        <div className={styles.sideNavContainer}>
            <div className={styles.menuItem}>
                <BriefcaseBusiness className={styles.icon} />
                <p>Switch Organisation</p>
                <ChevronDown className={styles.icon} />
            </div>

            <div className={styles.menuItem}>
                <House className={styles.icon} />
                <p>Dashboard</p>
            </div>

            <div className={styles.menuSection}>
                <h1>CUSTOMERS</h1>
                <div className={styles.menuItem}>
                    <Users className={styles.icon} />
                    <p>Users</p>
                </div>
                <div className={styles.menuItem}>
                    <SquareUserRound className={styles.icon} />
                    <p>Guarantors</p>
                </div>
                <div className={styles.menuItem}>
                    <HandCoins className={styles.icon} />
                    <p>Loans</p>
                </div>
                <div className={styles.menuItem}>
                    <Handshake className={styles.icon} />
                    <p>Decision Models</p>
                </div>
                <div className={styles.menuItem}>
                    <PiggyBank className={styles.icon} />
                    <p>Savings</p>
                </div>
                <div className={styles.menuItem}>
                    <Landmark className={styles.icon} />
                    <p>Loan Requests</p>
                </div>
                <div className={styles.menuItem}>
                    <Trash className={styles.icon} />
                    <p>Whitelist</p>
                </div>
                <div className={styles.menuItem}>
                    <UserPen className={styles.icon} />
                    <p>Karma</p>
                </div>
            </div>

            <div className={styles.menuSection}>
                <h1>BUSINESSES</h1>
                <div className={styles.menuItem}>
                    <BriefcaseBusiness className={styles.icon} />
                    <p>Organisation</p>
                </div>
                <div className={styles.menuItem}>
                    <Handshake className={styles.icon} />
                    <p>Loan Products</p>
                </div>
                <div className={styles.menuItem}>
                    <Landmark className={styles.icon} />
                    <p>Savings Products</p>
                </div>
                <div className={styles.menuItem}>
                    <p>Fees and Charges</p>
                    <CirclePoundSterling className={styles.icon} />
                </div>
                <div className={styles.menuItem}>
                    <ArrowRightLeft className={styles.icon} />
                    <p>Transactions</p>
                </div>
                <div className={styles.menuItem}>
                    <Star className={styles.icon} />
                    <p>Services</p>
                </div>
                <div className={styles.menuItem}>
                    <Users className={styles.icon} />
                    <p>Services Account</p>
                </div>
                <div className={styles.menuItem}>
                    <Layers2 className={styles.icon} />
                    <p>Settlements</p>
                </div>
                <div className={styles.menuItem}>
                    <BookDown className={styles.icon} />
                    <p>Reports</p>
                </div>
            </div>

            <div className={styles.menuSection}>
                <h1>SETTINGS</h1>
                <div className={styles.menuItem}>
                    <ChartNoAxesGantt className={styles.icon} />
                    <p>Preferences</p>
                </div>
                <div className={styles.menuItem}>
                    <BadgePercent className={styles.icon} />
                    <p>Fees and Price</p>
                </div>
                <div className={styles.menuItem}>
                    <ShieldBan className={styles.icon} />
                    <p>Audit Logs</p>
                </div>
                <div className={styles.menuItem}>
                    <ShipWheel className={styles.icon} />
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