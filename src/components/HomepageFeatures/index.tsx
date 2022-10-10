import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

import mainStyles from '../../pages/index.module.css'
import Translate from "@docusaurus/Translate";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    action: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'REST API',
        Svg: require('@site/static/img/rest-api.svg').default,
        action: 'docs/rest-api/intro'
    },
    {
        title: 'C# Library',
        Svg: require('@site/static/img/c#-library.svg').default,
        action: 'docs/rest-api/intro'
    },
    /*
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the <code>docs</code> directory.
    */
    {
        title: 'Java Library',
        Svg: require('@site/static/img/java-api.svg').default,
        action: 'docs/rest-api/intro'
    },
];

/*
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
 */

function RestFeature({title, Svg, action}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <br/>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <Translate id="feature.rest">REST-API um auf die verfügbaren Daten zuzugreifen.</Translate>
            </div>
            <br/>
            <br/>
            <div className={mainStyles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to={action}>
                    <Translate id="button.toDocumentation">Zur Dokumentation</Translate>
                </Link>
            </div>
        </div>
    );
}

function CSharpFeature({title, Svg, action}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <br/>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <Translate id="feature.c#">C# Klassenbibliothek um auf die REST-API zuzugreifen.</Translate>
            </div>
            <br/>
            <br/>
            <div className={mainStyles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to={action}>
                    <Translate id="button.toDocumentation">Zur Dokumentation</Translate>
                </Link>
            </div>
        </div>
    );
}

function JavaFeature({title, Svg, action}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <br/>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <Translate id="feature.java">Java Klassenbibliothek um auf die REST-API zuzugreifen.</Translate>
            </div>
            <br/>
            <br/>
            <div className={mainStyles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to={action}>
                    <Translate id="button.toDocumentation">Zur Dokumentation</Translate>
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
                    <RestFeature action={FeatureList[0].action} title={FeatureList[0].title} Svg={FeatureList[0].Svg}/>
                    <CSharpFeature action={FeatureList[1].action} title={FeatureList[1].title}
                                   Svg={FeatureList[1].Svg}/>
                    <JavaFeature action={FeatureList[2].action} title={FeatureList[2].title} Svg={FeatureList[2].Svg}/>

                    {/*FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    )*/}
                </div>
            </div>
        </section>
    );
}
