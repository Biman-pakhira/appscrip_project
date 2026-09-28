import { 
  InstagramIcon, 
  LinkedInIcon, 
  GooglePayIcon, 
  MastercardIcon, 
  PayPalIcon, 
  AmexIcon, 
  ApplePayIcon, 
  OPayIcon 
} from "./icons";

import styles from "./footer.module.css";

const SOCIAL_LABELS = ["Instagram", "LinkedIn"];

const MUSE_LINKS = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs"
];

const QUICK_LINKS = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions"
];

const PAYMENT_LABELS = ["Google Pay", "Mastercard", "PayPal", "Amex", "Apple Pay", "OPay"];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`page-shell ${styles.footerInner}`}>
        <div className={styles.topGrid}>
          <section>
            <h2 className={styles.footerHeading}>Be the first to know</h2>
            <p className={styles.footerCopy}>Sign up for updates from Appscrip.</p>

            <form className={styles.subscribeForm}>
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                placeholder="Enter your e-mail..."
                type="email"
              />
              <button type="button">Subscribe</button>
            </form>
          </section>

          <section className={styles.contactBlock}>
            <div>
              <h2 className={styles.footerHeading}>Contact us</h2>
              <p className={styles.contactLine}>+44 221 133 5360</p>
              <p className={styles.contactLine}>customercare@appscrip.com</p>
            </div>

            <div>
              <h2 className={styles.footerHeading}>Currency</h2>
              <p className={styles.currencyLine}>
                <span className={styles.flag} aria-hidden="true" />
                USD
              </p>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </section>
        </div>

        <div className={styles.bottomGrid}>
          <section className={styles.desktopLinks}>
            <h2 className={styles.brandName}>Appscrip</h2>
            <ul className={styles.linkList}>
              {MUSE_LINKS.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.desktopLinks}>
            <h2 className={styles.footerHeading}>Quick links</h2>
            <ul className={styles.linkList}>
              {QUICK_LINKS.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.socialColumn}>
            <h2 className={styles.footerHeading}>Follow us</h2>
            <div className={styles.socialLinks}>
              {SOCIAL_LABELS.map((label) => {
                const Icon = {
                  'Instagram': InstagramIcon,
                  'LinkedIn': LinkedInIcon
                }[label];
                return (
                  <span className={styles.paymentBadge} key={label}>
                    <Icon className={styles.paymentIcon} aria-label={label} />
                  </span>
                );
              })}
            </div>

            <div className={styles.paymentWrap}>
              <h2 className={styles.footerHeading}>Appscrip accepts</h2>
              <div className={styles.paymentGrid}>
                {PAYMENT_LABELS.map((label) => {
                  const Icon = {
                    'Google Pay': GooglePayIcon,
                    'Mastercard': MastercardIcon,
                    'PayPal': PayPalIcon,
                    'Amex': AmexIcon,
                    'Apple Pay': ApplePayIcon,
                    'OPay': OPayIcon
                  }[label];
                  return (
                    <span className={styles.paymentBadge} key={label}>
                      <Icon className={styles.paymentIcon} aria-label={label} />
                    </span>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <div className={styles.mobileAccordions}>
          <details className={styles.mobileDetail}>
            <summary>Appscrip</summary>
            <ul className={styles.linkList}>
              {MUSE_LINKS.map((item) => (
                <li key={`mobile-${item}`}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </details>

          <details className={styles.mobileDetail}>
            <summary>Quick links</summary>
            <ul className={styles.linkList}>
              {QUICK_LINKS.map((item) => (
                <li key={`quick-${item}`}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </details>

          <details className={styles.mobileDetail}>
            <summary>Follow us</summary>
            <div className={styles.socialLinks}>
              {SOCIAL_LABELS.map((label) => {
                const Icon = {
                  'Instagram': InstagramIcon,
                  'LinkedIn': LinkedInIcon
                }[label];
                return (
                  <span className={styles.paymentBadge} key={`mobile-${label}`}>
                    <Icon className={styles.paymentIcon} aria-label={label} />
                  </span>
                );
              })}
            </div>
          </details>
        </div>

        <div className={styles.paymentWrapMobile}>
          <h2 className={styles.footerHeading}>Appscrip accepts</h2>
          <div className={styles.paymentGrid}>
            {PAYMENT_LABELS.map((label) => (
              <span className={styles.paymentBadge} key={`mobile-${label}`}>
                {label}
              </span>
            ))}
          </div>
        </div>

        <p className={styles.copyright}>
          Copyright © 2023 Appscrip. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
