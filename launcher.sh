#!/bin/sh

# Runner
RUNNER=Run.ts

# ENV
export PROJECT_ROOT=$PWD
export PROJECT_SRC=$PWD/src/ts
export PROJECT_RESOURCES=$PWD/src/ts/resources
export PROJECT_CLASS_MAIN=fr.project.test.ShutDown
#.enum.Main

export JSTRIP_HOME="LOCAL_PATH"

# --main				      : Class to run
# --arguments			    : Argumets of your app. -Dfoo='bar' -Dfoo="bar" -Dfoo=12
# --mode				      : *main or instance
# --project-root		  : Path directory of your project
# --project-src			  : Source directory
# --project-resources	: Resources directory
# --quiet				      : Output no log, *false
# --main=$PROJECT_CLASS_MAIN \
ts-node $RUNNER \
  --main=$PROJECT_CLASS_MAIN \
  --arguments=\"$@\" \
  --project-src=\"$PROJECT_SRC\" \
  --jstrip-home=$JSTRIP_HOME \
  --mode=main