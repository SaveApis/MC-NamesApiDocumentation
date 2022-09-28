import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

import mainStyles from '../../pages/index.module.css'

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    action: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'REST API',
        Svg: require('@site/static/img/rest-api.svg').default,
        description: (
            <>
                REST-API um auf die verfügbaren Daten zuzugreifen.
            </>
        ),
        action: 'docs/rest-api/intro'
    },
    {
        title: 'C# Library',
        Svg: require('@site/static/img/c#-library.svg').default,
        description: (
            <>
                C# Klassenbibliothek um auf die REST-API zuzugreifen.
            </>
        ),
        action: 'docs/rest-api/intro'
    },
    /*
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the <code>docs</code> directory.
    */
    {
        title: 'Java Library',
        Svg: require('@site/static/img/java-api.svg').default,
        description: (
            <>
                Java Klassenbibliothek um auf die REST-API zuzugreifen.
            </>
        ),
        action: 'docs/rest-api/intro'
    },
];

function Feature({title, Svg, description, action}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={mainStyles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to={action}>
                    Zur Dokumentation
                </Link>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
