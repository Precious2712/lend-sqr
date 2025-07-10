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
    ShieldBan
} from "lucide-react";
import styles from './sideBarStyle/sideBar.module.scss';

export function SideBar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__item}>
                <BriefcaseBusiness className={styles.sidebar__icon} />
                <p className={styles.sidebar__text}>Switch Organisation</p>
                <ChevronDown className={styles.sidebar__icon} />
            </div>

            <div className={styles.sidebar__item}>
                <House className={styles.sidebar__icon} />
                <p className={styles.sidebar__text}>Dashboard</p>
            </div>

            <div className={styles.sidebar__section}>
                <h1 className={styles.sidebar__header}>CUSTOMERS</h1>
                <div className={styles.sidebar__item}>
                    <Users className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Users</p>
                </div>
                <div className={styles.sidebar__item}>
                    <SquareUserRound className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Guarantors</p>
                </div>
                <div className={styles.sidebar__item}>
                    <HandCoins className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Loans</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Handshake className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Decision Models</p>
                </div>
                <div className={styles.sidebar__item}>
                    <PiggyBank className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Savings</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Landmark className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Loan Requests</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Trash className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Whitelist</p>
                </div>
                <div className={styles.sidebar__item}>
                    <UserPen className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Karma</p>
                </div>
            </div>

            <div className={styles.sidebar__section}>
                <h1 className={styles.sidebar__header}>BUSINESSES</h1>
                <div className={styles.sidebar__item}>
                    <BriefcaseBusiness className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Organisation</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Handshake className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Loan Products</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Landmark className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Savings Products</p>
                </div>
                <div className={styles.sidebar__item}>
                    <p className={styles.sidebar__text}>Fees and Charges</p>
                    <CirclePoundSterling className={styles.sidebar__icon} />
                </div>
                <div className={styles.sidebar__item}>
                    <ArrowRightLeft className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Transactions</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Star className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Services</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Users className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Services Account</p>
                </div>
                <div className={styles.sidebar__item}>
                    <Layers2 className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Settlements</p>
                </div>
                <div className={styles.sidebar__item}>
                    <BookDown className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Reports</p>
                </div>
            </div>

            <div className={styles.sidebar__section}>
                <h1 className={styles.sidebar__header}>SETTINGS</h1>
                <div className={styles.sidebar__item}>
                    <ChartNoAxesGantt className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Preferences</p>
                </div>
                <div className={styles.sidebar__item}>
                    <BadgePercent className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Fees and Price</p>
                </div>
                <div className={styles.sidebar__item}>
                    <ShieldBan className={styles.sidebar__icon} />
                    <p className={styles.sidebar__text}>Audit Logs</p>
                </div>
            </div>
        </div>
    )
}