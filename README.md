# LeverJ Token Sale


This repository contains components used to hold a token sale for the LeverJ project.


### Testing

A number of test wallets are contained under `conf/keystore`, all of which have password "". Each address is given a test balance in the genesis file `conf/genesis.json`. 

Running `bin/test-init` will initialize this genesis, with datadir and dagdir under `/tmp`, then start a local node with all accounts unlocked. Additionally, an [autominer](lib/autominer.js) script ensures blocks are only mined when there are new transactions. This keeps the difficulty low for testing.


***

