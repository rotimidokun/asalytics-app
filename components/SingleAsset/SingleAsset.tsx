import React from "react";
import Image from "next/image";
import styles from "../../styles/SingleAsset.module.css";

interface AssetType {
  assetId: string;
  available: boolean;
  logo: string;
  name: string;
}

export type Asa = Array<Partial<AssetType>>;

const myLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const SingleAsset = ({ data }: { data: Asa }) => {
  const availabilityText = (available?: boolean) =>
    available ? "Available" : "Unavailable";

  return (
    <>
      {data.map((val, index) => {
        return (
          <div key={index} className={styles.assetWrapper}>
            {val.logo ? (
              <Image
                src={val.logo}
                alt="Vercel Logo"
                width={29}
                height={43}
                loader={myLoader}
              />
            ) : (
              <Image
                src="/asset-logo.svg"
                alt="Vercel Logo"
                width={29}
                height={43}
              />
            )}

            <p className={styles.assetName}>{val.name} </p>

            <div
              className={
                val.available
                  ? styles.availableWrapper
                  : styles.unAvailableWrapper
              }
            >
              {availabilityText(val.available)}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleAsset;
