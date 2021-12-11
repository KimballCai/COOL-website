import React, {useCallback, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import GitHubButton from 'react-github-btn';

import customFields from '../config/customFields';
import '../css/index.scss';

import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// const {siteConfig} = useDocusaurusContext();


function Section({
                     element = 'section',
                     children,
                     className,
                     background = 'light',
                 }) {
    const El = element;
    return <El className={`Section ${className} ${background}`}>{children}</El>;
}

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', 'heroBanner')}>
            <div className="container">
                <h1 className="hero__title">{customFields.title}</h1>
                <p className="hero__subtitle">{customFields.tagline}</p>
                <div className='buttons'>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Docusaurus Tutorial - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

function IntroHeader() {
    return (
        <Section background="dark" className="IntroHeader">
            <div className="socialLinks">
                <a href="https://twitter.com/" className="social-button twitter-follow-button">
                    <div className="icon" />
                    Follow
                </a>
                <div className="social-button github-button">
                    <GitHubButton
                        href={customFields.githubUrl}
                        data-icon="octicon-star"
                        data-size="large"
                        aria-label="Star COOL on GitHub">
                        Star
                    </GitHubButton>
                </div>
            </div>
            <div className="two-columns">
                <div className="column left">
                    <h1 className="title">{customFields.name}</h1>
                    <p className="tagline">{customFields.description}</p>
                    <div className="buttons">
                        <a
                            className="button primary"
                            href={customFields.livedemoUrl}
                            target="_self">
                            Get Started
                        </a>
                        <a
                            className="button secondary"
                            href={customFields.githubWebUrl}
                            target="_self">
                            Learn more
                        </a>
                    </div>
                </div>
                <div className="column right">
                    <img className="logo-img" alt="Logo" src="../assets/icons/svg/p1.svg" />
                </div>
            </div>
        </Section>
    );
}

function Architecture() {
    return (
        <Section className="Architecture" background="light">
            <div className="center-box">
                <h2 className="title">Architecture</h2>
                <img
                    className="arch-img"
                    alt=""
                    // src={useBaseUrl('assets/icons/svg/p2.svg')}
                    src={useBaseUrl('assets/images/arch.gif')}
                />
                <p className="arch-p">
                    COOL is an efficient and effective tool specialized for conducting cohort analysis
                    for time series data.
                </p>
            </div>
        </Section>
    );
}

const FeatureList = [
    {
        title: 'Easy to Use',
        // path: iconGr.GrDeploy,
        path: 'assets/icons/launch.png',
        description: (
            <>
                Easily deploy a web app to utilize COOL on local or on cloud via docker.
            </>
        ),
    },
    {
        title: 'Near Real-time Responses',
        // Svg: iconBi.BiBroadcast,
        path: 'assets/icons/response.png',
        description: (
            <>Process cohort queries in near real-time analytical responses.</>
        ),
    },
    {
        title: 'Specialized Storage Layout',
        // Svg: iconRi.RiLayoutMasonryLine,
        path: 'assets/icons/layout.png',
        description: (
            <>
                A specialized storage layout optimized for fast query processing and
                reduced space consumption.
            </>
        ),
    },
    {
        title: 'Self-designed Semantics',
        // Svg: iconGr.GrSemantics,
        path: 'assets/icons/semantic.png',
        description: (
            <>
                Define specialized semantics for the cohort query, which can simplify
                its complexity and improve its functionality.
            </>
        ),
    },
    {
        title: 'Flexible Integration',
        // Svg: iconGr.GrResources,
        path: 'assets/icons/integration.png',
        description: (
            <>
                Flexible integration with other data systems via common data
                formats（e.g., CSV, Parquet, Avro, and Arrow).
            </>
        ),
    },
    {
        title: 'Artificial Intelligence Model',
        // Svg: iconGr.GrMemory,
        path: 'assets/icons/model.png',
        description: (
            <>
                Utilize COOL's cohort results and findings to facilitate building
                artificial intelligence models.
            </>
        ),
    },
];

function Feature({path, title, description}) {
    return (
        <div className={clsx('col col--4 onpure_bg')}>
            <div className="text-center onpure">
                {/*<Svg className="featureSvg onpure_title" alt={title} />*/}
                {/*<span className="onpure_title">here</span>*/}
                {/*<iconGr.GrInstall className="featureSvg" alt={title} />*/}
                <img className="icon-img onpure_title" src={useBaseUrl(path)} />
            </div>
            <span className="line"></span>
            <div className="text-center onpure_rest">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

function Features() {
    return (
        <Section className="Features" background="tint">
            <div className="container">
                <h2 className="title">Features</h2>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </Section>
    );
}

function UseCaseTabs() {
    const [opened, setOpened] = useState('general');
    const handleClickIs = useCallback(() => {
        setOpened('general');
    }, []);
    const handleClickGoodFor = useCallback(() => {
        setOpened('healthcare');
    }, []);
    const handleClickIsNot = useCallback(() => {
        setOpened('finance');
    }, []);

    return (
        <Section className="UseCaseTabs" background="light">
            <div className="container">
                <h2 className="title">Use-Cases</h2>
                <p className="desc">
                    We can employ COOL for many scenarios, such as Healthcare, Finance,
                    etc.
                </p>
                <div className="content">
                    <div className="buttons">
                        <a
                            className={clsx({
                                ['button']: true,
                                ['primary']: opened === 'general',
                                ['tertiary']: opened !== 'general',
                            })}
                            onClick={handleClickIs}>
                            General
                        </a>
                        <a
                            className={clsx({
                                ['button']: true,
                                ['primary']: opened === 'healthcare',
                                ['tertiary']: opened !== 'healthcare',
                            })}
                            onClick={handleClickGoodFor}
                            // size="small"
                            // variant={opened === 'realtime' ? 'primary' : 'tertiary'}
                        >
                            Healthcare
                        </a>
                        <a
                            className={clsx({
                                ['button']: true,
                                ['primary']: opened === 'finance',
                                ['tertiary']: opened !== 'finance',
                            })}
                            onClick={handleClickIsNot}
                            // size="small"
                            // variant={opened === 'integration' ? 'primary' : 'tertiary'}
                        >
                            Finance
                        </a>
                    </div>

                    <div className="items">
                        <div
                            className={clsx({
                                ['panel']: true,
                                ['panel_active']: opened === 'general',
                            })}>
                            <div className="video">
                                <video
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    src={useBaseUrl(`assets/videos/CohortAnalysis.mp4`)}
                                />
                            </div>
                            <div className="panel_items">
                                <p className="class">General</p>
                                <h2 className="title"> Cohort Analysis</h2>
                                <p className="content">
                                    Cohort analysis is a method of analyzing metrics across
                                    different groups (i.e., cohorts), which share common
                                    characteristics on the accumulated data.
                                </p>
                                <p className="content">
                                    These characteristics play a critical role in user profiling
                                    and the decision-making process in data-driven organizations.
                                </p>
                            </div>
                        </div>

                        <div
                            className={clsx({
                                ['panel']: true,
                                ['panel_active']: opened === 'healthcare',
                            })}>
                            <div className="video">
                                <video
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    src={useBaseUrl(`assets/videos/CohortAnalysis-healthcare.mp4`)}
                                />
                            </div>
                            <div className="panel_items">
                                <p className="class">Healthcare</p>
                                <h2 className="title"> Drug Effect Analysis</h2>
                                <p className="content">
                                    A usage of cohort analysis in healthcare analtics can be
                                    side-effect evaluation of a tested drug in clinical trials,
                                    where the clinicians need to distinguish the effectiveness of
                                    new medicines (e.g., Medicine A) on a certain feature (e.g.,
                                    Labtest A) among different patient groups.
                                </p>
                            </div>
                        </div>

                        <div
                            className={clsx({
                                ['panel']: true,
                                ['panel_active']: opened === 'finance',
                            })}>
                            <div className="video">
                            </div>
                            <div className="panel_items">On going.</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

function TechPre() {
    return (
        <Section className="TechPre" background="tint">
            <div className="TechText">
                <h2 className="title">Extend Cohort Analysis on our COOL</h2>
                {/*<p className="content">*/}
                {/*    The video in the left demonstrates how COOL processes data, designs storage format, operate cohort queries for cohort analysis*/}
                {/*    in details.*/}
                {/*</p>*/}
            </div>
            <div className="TechVideo">
                <iframe
                    src="https://www.youtube.com/embed/6pkePexBkls"
                    title="Paper presentation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </Section>
    );
}

function Demostration() {
    return (
        <Section className="Demostration" background="light">
            <h2 className="title">Demonstration</h2>
            <div className="container">
                <div className="DemoVideo">
                    <iframe
                        src="https://www.youtube.com/embed/Yv2ZajtS_d4"
                        title="New version of COOL web app demonstration video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="DemoText">
                    <p className="class">Healthcare</p>
                    <h2>Using COOL to conduct cohort analysis on healthcare </h2>
                    <p>
                        Here is the latest video illustrating a general example of how to conduct cohort analysis in healthcare. In this example, we measure the effect of a certain medical drug on patients of different age groups.
                    </p>
                    <p>
                        Feel free try out our Online website application of COOL by clicking "Try Our Demo".
                    </p>
                    <a className="button" href={customFields.livedemoUrl}>
                        Try Our Demo
                    </a>
                </div>
            </div>
        </Section>
    );
}

const CoolCode =
    '# Install COOL\n' +
    'git clone https://github.com/cool-squad/cool.git';
const WebCode =
    '# Install COOL with our website application\n' +
    'git clone https://github.com/cool-squad/cool-covid-website.git\n' +
    'cd cool-covid-website\n' +
    'sh docker.sh start';

function TryOurCode() {
    return (
        <Section className="TryOurCode" background="tint">
            <div className="container">
                <div className="text">
                    <h2>Install COOL</h2>
                </div>
                <Tabs>
                    <TabItem value="cool" label="COOL">
                        <div className="codeblock">
                            <CodeBlock language="bash">{CoolCode}</CodeBlock>
                        </div>

                    </TabItem>
                    <TabItem value="web" label="Web App">
                        <div className="codeblock">
                            <CodeBlock language="bash">{WebCode}</CodeBlock>
                        </div>
                    </TabItem>
                </Tabs>
            </div>
        </Section>
    );
}

export default function Home() {
    return (
        <Layout description={customFields.description} wrapperClassName="homepage">
            <Head>
                <title>{customFields.title}</title>
            </Head>
            <IntroHeader />
            <Architecture />
            <Features />
            <UseCaseTabs />
            <TechPre />
            <Demostration />
            <TryOurCode />
        </Layout>
    );
}
