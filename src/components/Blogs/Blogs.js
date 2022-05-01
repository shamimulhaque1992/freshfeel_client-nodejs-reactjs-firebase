import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <Accordion
        className="w-75 mx-auto pt-4 mt-4 pb-4 mb-4"
        defaultActiveKey={["0"]}
        alwaysOpen
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference Between Authentication and Authorization.
          </Accordion.Header>
          <Accordion.Body>
            In simple words the main difference between authorization and
            authentication is the permision to do some action. <br />
            Mainly when we say authentication we think about verify a particular
            person whether it's he/she or not. <br />
            On the other hand, when we talk about authorization we think about
            giving some access to the particular user who have been
            authenticated. <br />
            By definition Authentication is the process or action of proving or
            showing something to be true, genuine, or valid. <br />
            And Authorization is the process of giving someone the ability to
            access a resource.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why we use firebase database and what are the alternatives?
          </Accordion.Header>
          <Accordion.Body>
            Firebase is known as a toolset to “build, improve, and grow our
            app”, and the tools it gives us cover a large portion of the
            services that developers would normally have to build themselves,
            but don’t really want to build, because they’d rather be focusing on
            the app experience itself. Firebase includes things like analytics,
            authentication, databases, configuration, file storage, push
            messaging, and the list goes on. The services are hosted in the
            cloud, and scale with little to no effort on the part of the
            developer. <br></br>
            <strong>Alternatives:</strong> Oracle Database, DataStax Enterprise,
            Redis Enterprise Cloud, Cloudera Enterprise Data Hub, Db2.
            MarkLogic, Couchbase Server, Neo4j, etc.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Other than authentication, what else can we do using firebase
            database?{" "}
          </Accordion.Header>
          <Accordion.Body>
            <strong>Firebase Realtime Database:</strong> The Firebase Realtime
            Database is a cloud-hosted database. Usually Data is stored as JSON
            and synchronized in realtime to every connected client. When us
            build cross-platform apps with our Apple platforms, Android, and
            JavaScript SDKs, all of our clients share one Realtime Database
            instance and automatically receive updates with the newest data.
            <br></br>
            <br></br>
            <strong>Cloud Firestore:</strong>
            Firestore is a flexible, scalable NoSQL cloud database to store and
            sync data. It keeps our data in sync across client apps through
            realtime listeners and offers offline support so we can build
            responsive apps that work regardless of network latency or Internet
            connectivity. Cloud Firestore is a flexible, scalable database for
            mobile, web, and server development from Firebase and Google Cloud.
            Like Firebase Realtime Database, it keeps our data in sync across
            client apps through realtime listeners and offers offline support
            for mobile and web so us can build responsive apps that work
            regardless of network latency or Internet connectivity. Cloud
            Firestore also offers seamless integration with other Firebase and
            Google Cloud products, including Cloud Functions. <br></br>
            <br></br>
            <strong>Hosting:</strong>
            Firebase Hosting provides hosting for static web sites, such as the
            ones you can generate using static site generators or even sites
            built with server-side CMS platforms, from which you generate a
            static copy of the website. You can host anything as long as it’s
            not dynamic. A WordPress blog for example is almost always a good
            candidate to be a static site, if you use Disqus or Facebook
            comments. Firebase Hosting delivers files through the Fastly CDN,
            using HTTPS and provides an automatic SSL certificate, with custom
            domain support. Its free tier is generous, with cheap plans if you
            outgrow it, and is very developer-friendly: Firebase provides a CLI
            interface tool, an easy deployment process, and one-click rollbacks
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
