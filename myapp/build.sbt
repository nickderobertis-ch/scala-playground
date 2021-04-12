name := """myapp"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.5"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test
libraryDependencies += "io.lemonlabs" %% "scala-uri" % "1.5.1"
libraryDependencies += "net.logstash.logback" % "logstash-logback-encoder" % "6.2"
libraryDependencies += "net.codingwell" %% "scala-guice" % "4.2.6"

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.example.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.example.binders._"
