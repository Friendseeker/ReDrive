# ReDrive
## Inspiration

Mainstream Web-based services are infamous for:

- Data Insecurity
  - Data Leak (2013 Adobe Plain Text Data Leak)
  - Data corruption (2017 GitLab data loss incident)
- Unwanted Data Collection
  - Companies like Google are notorious for collecting sensitive user data, like recording without explicit user consent.
- Trust issue for startup services
  - Online Payment providers like Alipay had a rough start because no one trusted the platform

ReDrive is an Airbnb inspired platform that aims to offer rental services to tourists, and to alienate all 3 aforementioned issues by incorporating blockchain technology.

- Code is open-sourced on EVM (Ethereum Virtual Machine) so that:
  - The user does not need to trust the developer, instead, they only need to inspect the EVM implementation to ensure the platform is doing what it is supposed to do
    - Collect only strictly needed data 
    - User data will not disappear/be leaked in plain text/changed maliciously due to either developer negligence/malice, and users can ensure this by reviewing the code running on EVM.
   - Platform will not unexpectedly close. 
   - EVM applications can only be closed by calling selfdestruct() method. Users can even monitor the occurrence of this method in the code.

## What it does

ReDrives offers an AirBnB like service, with added special advantage intrinsic to decentralized applications. By incorporating a trust rating system into our website, both customers and hosts can feel more secure using it.

## How we built it

Our initial roadmap is to employ web3 library to interact with our blockchain code, then build a wrapper REST API around it that our front-end website can utilize. Our teammates also did a lot of research through out the hackathon to constantly learn new topics that needed to be implemented in our design.

## Challenges we ran into

We were being overly ambitious about our team's engineering capability. Our expectation is based on perfect execution with no room for error. However, in real-life development, mistakes happen, and these mistakes cause delays.

For instance one of our team members decided to "retire" midway, as the team member struggled to use git, and advocated to use email to send files instead. Such incidence inevitably delayed our progress, to the point that we did not have time to finish the blockchain part, but rather have to implement planned features using a conventional, centralized approach as a demo. The front end also did not meet our initial vision as result.

There are also technical challenges, such as, blockchain does not actually excel at keeping data private.

## Accomplishments that we're proud of

Despite meeting such major challenges such as the aforementioned human resource challenge, we still did not give up and managed to salvage what we have to produce a demo.

## What we learned

Choosing the right team members is integral to the success of a project. The team members need to share similar views and values, in order to prevent certain conflicts.

Also, it is important to leave a margin of error during planning, such that progress delay does not cause major issues.

## What's next for ReDrive

We will polish our front end, for different browsers/device sizes. As, currently, the front-end webpage is broken on firefox. Also, the visual design of the front end has room for improvement.

We will also finish implementing the blockchain part.