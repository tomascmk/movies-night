import styles from './ScreenLoader.module.scss'
export const ScreenLoader = () => {
  const getCornflakes = () => {
    const cornFlakes = [
      <img
        src='../../../public/img/corn.svg'
        alt='corn'
        className={styles.corn1}
        key='1'
      />,
      <img
        src='../../../public/img/corn.svg'
        alt='corn'
        className={styles.corn2}
        key='2'
      />,
      <img
        src='../../../public/img/corn.svg'
        alt='corn'
        className={styles.corn3}
        key='3'
      />,
      <img
        src='../../../public/img/corn.svg'
        alt='corn'
        className={styles.corn4}
        key='4'
      />,
      <img
        src='../../../public/img/corn.svg'
        alt='corn'
        className={styles.corn5}
        key='5'
      />,
      <img
        src='../../../public/img/corn.svg'
        alt='corn'
        className={styles.corn6}
        key='6'
      />,
      <img
        src='../../../public/img/corn.svg'
        alt='corn'
        className={styles.corn7}
        key='7'
      />
    ]

    return cornFlakes
  }
  return (
    <div className={styles.loaderContainer}>
      <img
        src='../../../public/img/pop-corn.svg'
        alt='popcorn'
        className={styles.popCorn}
      />
      {getCornflakes()}
      <div className={styles.labelContainer}>
        <h1 className={styles.loadingLabel}>
          Cargando
          <i className={styles.dot1}>.</i>
          <i className={styles.dot2}>.</i>
          <i className={styles.dot3}>.</i>
        </h1>
      </div>
      <div className={styles.loaderBackground}></div>
      <div className={styles.loaderShadow}></div>
    </div>
  )
}
