import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import styles from "../styles/JoinUs.module.css";

export default function JoinUs() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors.firstname);

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <NextSeo
        title="Rejoins Nous"
        description="Prenez part à la grande aventure !"
      />

      <h1 className={styles.h1}>Rejoins nous</h1>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="firstname" className={styles.label}>
            Prénom *
            <input
              type="text"
              className={styles.input}
              id="firstname"
              name="firstname"
              placeholder="Ton prénom"
              ref={register({
                required: "Vous devez entrer votre prénom !",
                maxLength: {
                  value: 80,
                  message: "Vous ne pouvez pas depassez 80 caractères",
                },
              })}
            />
            {errors.firstname && (
              <span className={styles.span}>{errors.firstname.message}</span>
            )}
          </label>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="lastname" className={styles.label}>
            Nom *
            <input
              type="text"
              className={styles.input}
              id="lastname"
              name="lastname"
              placeholder="Ton nom"
              ref={register({
                required: "Vous devez entrer votre nom !",
                maxLength: {
                  value: 80,
                  message: "Vous ne pouvez pas depassez 80 caractères",
                },
              })}
            />
            {errors.lastname && (
              <span className={styles.span}>{errors.lastname.message}</span>
            )}
          </label>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="Email" className={styles.label}>
            Email *
            <input
              type="text"
              className={styles.input}
              id="Email"
              name="Email"
              placeholder="Ton Email"
              ref={register({
                required: "Vous devez entrer votre nom !",
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.Email && (
              <span className={styles.span}>{errors.Email.message}</span>
            )}
          </label>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="Mobile_number" className={styles.label}>
            Mobile *
            <input
              type="tel"
              className={styles.input}
              id="Mobile_number"
              name="Mobile_number"
              placeholder="0606060606"
              ref={register({
                required: "Vous devez entrer votre numéro de téléphone !",
                pattern: /^\d{10}$/,
              })}
            />
            {errors.Mobile_number && (
              <span className={styles.span}>
                {errors.Mobile_number.message}
              </span>
            )}
          </label>
        </div>
      </div>

      <hr />
      <h2 className={styles.h2}>
        Prouve ton implication en donnant tes coordonnées bancaires :{" "}
      </h2>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="Name_on_card" className={styles.label}>
            Nom de la carte*
            <input
              type="text"
              className={styles.input}
              id="Name_on_card"
              name="Name_on_card"
              ref={register({
                required:
                  "Vous devez entrer votre nom correspondant à votre carte bancaire !",
                maxLength: 80,
              })}
            />
            {errors.Name_on_card && (
              <span className={styles.span}>{errors.Name_on_card.message}</span>
            )}
          </label>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="Card_number" className={styles.label}>
            Numéro de la carte*
            <input
              type="text"
              className={styles.input}
              id="Card_number"
              name="Card_number"
              ref={register({
                required: "Vous devez entrer votre numéro de carte bancaire !",
                maxLength: 16,
              })}
            />
            {errors.Card_number && (
              <span className={styles.span}>{errors.Card_number.message}</span>
            )}
          </label>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="Expiry_date" className={styles.label}>
            Date d&apos;expiration (MM/AA)*
            <input
              type="text"
              className={styles.input}
              id="Expiry_date"
              name="Expiry_date"
              ref={register({
                required:
                  "Vous devez entrer la date d'expiration de votre carte bancaire avec le format MM/AA !",
                maxLength: 5,
              })}
            />
            {errors.Expiry_date && (
              <span className={styles.span}>{errors.Expiry_date.message}</span>
            )}
          </label>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="Security_code" className={styles.label}>
            Code de sécurité*
            <input
              type="text"
              className={styles.input}
              id="Security_code"
              name="Security_code"
              ref={register({
                required:
                  "Vous devez entrer le code de sécurité de votre carte bancaire situé au dos de celle-ci !",
                maxLength: 5,
              })}
            />
            {errors.Security_code && (
              <span className={styles.span}>
                {errors.Security_code.message}
              </span>
            )}
          </label>
        </div>
      </div>
      <p className={styles.colorGreen}>
        Après validation, si vous avez besoin de quelque chose ? Ne vous
        inquiétez pas, je vous dirai comment vous en passer.
      </p>
      <input type="submit" />
    </form>
  );
}
