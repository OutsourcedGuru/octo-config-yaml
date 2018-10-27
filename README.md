# octo-config-yaml
Easily recreate an initial OctoPrint config.yaml file if yours has become corrupted

## Overview

> **Node.js** is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side as well as client-side.
>
> **OctoPrint** is the leading web software for controlling 3D printers, created/maintained by Gina Häußge
>
> **OctoPi** is a Raspberry-specific distro of OctoPrint, maintained by Guy Sheffer

## Overview
Sometimes after attempting to edit OctoPrint's configuration file you might upset the delicate balance of the yaml file's indentation, rendering OctoPrint so that it now won't start. This program can sometimes help you so that you don't have to start over from scratch.

A better solution is to routinely backup your Raspberry Pi's `~/.octoprint` folder structure. The approach described here is a fall-back plan in case you haven't done so.

## Installation
I assume that you have a workstation with `git`, `Node` and `npm` installed and can remote into your Raspberry Pi with `ssh` or `putty`. I also assume that you have either `scp` (OSX) or that you can otherwise copy a file to your Raspberry Pi.

1. `mkdir ~/sites && cd ~/sites`
2. `git clone https://github.com/OutsourcedGuru/octo-config-yaml.git`
3. `cd octo-config-yaml`
4. `npm install`
5. `open http://localhost:3000/` # For Windows: `start http://localhost:3000/`

|Description|Version|Author|Last Update|
|:---|:---|:---|:---|
|octo-config-yaml|v1.0.1|OutsourcedGuru|October 27, 2018|

|Donate||Cryptocurrency|
|:-----:|---|:--------:|
| ![eth-receive](https://user-images.githubusercontent.com/15971213/40564950-932d4d10-601f-11e8-90f0-459f8b32f01c.png) || ![btc-receive](https://user-images.githubusercontent.com/15971213/40564971-a2826002-601f-11e8-8d5e-eeb35ab53300.png) |
|Ethereum||Bitcoin|
