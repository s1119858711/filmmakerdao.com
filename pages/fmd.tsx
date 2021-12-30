import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Icon,
    IconButton,
    Stack,
    StackDivider,
    Text,
    useBreakpointValue,
    VisuallyHidden,
    VStack,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import { BsLightningCharge } from 'react-icons/bs';
  import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
  import { GiCrownedHeart } from 'react-icons/gi';
  import { useTranslation } from 'react-i18next';
  
  export default function IndexPage() {
    const { t } = useTranslation();
  
    return (
      <Container>
        <Stack
          as="main"
          minH="100vh"
          spacing={{ base: 4, md: 6 }}
          divider={
            <StackDivider
              h="2px"
              rounded="sm"
              bgGradient="linear(to-r, #EE5967, #33E0FF)"
            />
          }
        >
          <Heading as="h1" fontSize="xl">
            {t('FilmmakerDAO FAQ')}
          </Heading>
  
          <Stack spacing={{ base: 8, md: 10 }}>
  
            <Stack spacing={6}>
              <Heading as="h2" fontSize="lg">
                {'What is FilmmakerDAO?'}
              </Heading>
              <Text>
      
  FilmmakerDAO is the DAO for filmmakers and film enthusiasts. 
  </Text>
  
  <Text>
   DAO stands for Decentralized Autonomous Organisation: a group of people with shared goals that are governed by an agreed set of rules coded into smart contracts
    on a blockchain.
    </Text>
    <Text>
  At FilmmakerDAO, we coordinated efforts from filmmakers, technologists, and art lovers who believe in the power of film. 
  </Text>
  <Text>
  We believe 
  filmmakers should have more ownership of their careers, and more sovereignty
   over the IP they create. 
   </Text>
   <Text>
   We recognize that the current landscape of distribution 
   options does not provide commensurate upside for the storytellers and artists whose work populates these platforms.
   </Text>
    
   <Text>
  We seek to become a diverse and open community from a broad spectrum of backgrounds and specialties unified 
  and aligned in the vision to build more equitable distribution strategies for the filmmaking industry.
  </Text>
  
   
            </Stack>
  
            <Stack spacing={6}>
  
            <StackDivider
              h="2px"
              rounded="sm"
              bgGradient="linear(to-r, #33FF8D, #726EB2)"
            />
              <Heading as="h2" fontSize="lg">
                {'What are the Storytelling Cards?'}
              </Heading>
  
  
              <Text>
  The Storytelling Card collection is the FilmmakerDAO NFT series for season 0. 
  Each card is a generative storytelling ERC721 token created and stored on-chain. 
  </Text>
    
    <Text>
    This collection was created and written by one of our core members, <a href="https://twitter.com/bt3gl">bt3gl</a>, 
    and all proceeds will be donated to our treasury, a Gnosis multi-sig wallet.
    </Text>
    
    <Text>
  We thought Loot was a great project to spur further creative thought, and we hope Filmmakers can carry on that idea.
  Feel free to use your Storyteller Card in any way you want!
  </Text>
  
  
            </Stack>
  
            <Stack spacing={6}>
  
            <StackDivider
              h="2px"
              rounded="sm"
              bgGradient="linear(to-r, #FF33D4, #FF8D33)"
            />
  
              <Heading as="h2" fontSize="lg">
                {'How are the Storytelling Cards rolled out?'}
              </Heading>
              
              <Text>
  1,999 Filmmakers will be available to mint for active community members starting 8:00 a.m. ET on December 17th, 2021, at 0.05 ETH. 
  </Text>
    
    <Text>
  We thought   
  FilmmakerDAO reserves 662 cards to gift (Token IDs from 1338 to 1999), either before or after the launch.
  </Text>
  
  
  
            </Stack>
  
            <Stack spacing={6}>
  
            <StackDivider
              h="2px"
              rounded="sm"
              bgGradient="linear(to-r, #FFF033, #EE5967)"
            />
              <Heading as="h2" fontSize="lg">
                {'What can I do with my Storyteller Card?'}
              </Heading>
  
              <Text>
              Your Storyteller Card will act as membership access to FilmmakerDAO community. 
              </Text>
    
    <Text>
  Additionally, all cardholders will be airdropped 10% of $REEL (50 tokens). This is FilmmakerDAO’s illiquid governance token bridged in 
  the Polygon Network and will be able to vote and decide the future of FilmmakerDAO. The airdrop starts at the beginning of Season 1 (March) and will be vested 
  (10 $REEL/month for 5 months).
  </Text>
    
    <Text>
  But governance is not all! Holding a Storyteller Card will allow you to attend any DAO-organized events such as private screenings, 
    set visits productions, Q&A with top industry professionals, and social mixers, and... 
    some surprises <a href="https://twitter.com/filmmakerDAO/status/1473162340816146434?s=20">(like this 😉)!</a>
    </Text>
    
    <Text>
  What you do with your card will be up to you, the Storyteller, as you help write the story of FilmmakerDAO!
              </Text>
  
  
            </Stack>
  
            <Stack spacing={6}>
            <StackDivider
              h="2px"
              rounded="sm"
              bgGradient="linear(to-r, #FFF033, #EE5967)"
            />
              <Heading as="h2" fontSize="lg">
                {'How do I prepare my wallet?'}
              </Heading>
  
              <Text>
  To mint an NFT on the Ethereum blockchain, you'll need both Ether (ETH) and a wallet that can hold your NFT.
  </Text>
    
    <Text>
  Recommended wallets are <a href="https://metamask.io/">MetaMask</a> and <a href="https://rainbow.me">Rainbow</a>,
  which allow you to add ETH using Apple Pay.
  </Text>
  
  
            </Stack>
  
  
  
  
            <Stack spacing={6}>
            <StackDivider
              h="2px"
              rounded="sm"
              bgGradient="linear(to-r, #FF33D4, #726EB2)"
            />
              <Heading as="h2" fontSize="lg">
                {'How do I buy Ether?'}
              </Heading>
  
              <Text>
     
  The easiest way to buy Ether, the currency used on Ethereum, is to use a crypto exchange. 
  We recommend Coinbase or Gemini for beginners. 
  </Text>
  <Text>
  Make sure that you have more Ether than you need for the cost of the mint - 
  each Ethereum transaction requires "gas," the network fees that go into processing blockchain 
  transactions. Gas fees vary by the type of transaction and depending on the level of activity in the Ethereum 
  network.
  
  </Text>
  <Text>
  Once you've bought your Ether, transfer it by sending it to the address of the wallet you just created earlier.
  
     
  </Text>
  
  
            </Stack>
  
  
  
  
  
  
  
  
  
            <Stack spacing={6}>
            <StackDivider
              h="2px"
              rounded="sm"
              bgGradient="linear(to-r, #FF8D33, #33FF8D)"
            />
              <Heading as="h2" fontSize="lg">
                {'How do I mint my Storytelling Card?'}
              </Heading>
  
              <Text>
      
  When you "mint" an NFT, you're interacting with a smart contract on the blockchain and making a transaction to create a 
    new token under that contract, one that you own. 
    </Text>
  <Text>
    The easiest way to mint a Storytelling Card will be through the <a href="generativestory.com">generativestory.com</a> website, 
    since we'll handle a lot of the complexity for you.
    </Text>
  <Text>
  You'll need to connect your wallet to our website using the "Connect Wallet" button - a modal will open, 
    and you'll need to choose the wallet type you created earlier. 
    </Text>
  <Text>
  Once your wallet is connected, select the Token ID of the Storytelling Card you'd like to mint.
    Then click "Mint a Storycard", and you should see an overview of the transaction you're about to create in your wallet, with the option to confirm it.
    </Text>
  <Text>
  In most cases, the transaction should take a minute or two to be completed.
  
  
  
  </Text>
  
            </Stack>
  
  
  
  
  
  
  
  
  
  
  
            <Stack spacing={6}>
            <StackDivider
              h="2px"
              rounded="sm"
              bgGradient="linear(to-r, #FF33D4, #33E0FF)"
            />
              <Heading as="h2" fontSize="lg">
                {'How do I view and keep my Storytelling Card?'}
              </Heading>
  
              <Text>
      
              You should be able to view your Storytelling Card in your wallet or marketplaces like OpenSea.
  
  
  
  </Text>
  
            </Stack>
  
  
  
  
  
  
  
  
  
  
          </Stack>
  
          <VStack spacing={4}>
            <HStack as="footer" justify="center">
              <SocialIconLink
                href="https://twitter.com/filmmakedao"
                label="Twitter"
              >
                <>
                  <FaTwitter />
                  <VisuallyHidden>
                    {t('socialLinkLabel', { platform: 'Twitter' })}
                  </VisuallyHidden>
                </>
              </SocialIconLink>
              <SocialIconLink href="https://discord.com/invite/TfQfnrHVap" label="Discord">
                <>
                  <FaDiscord />
                  <VisuallyHidden>
                    {t('socialLinkLabel', { platform: 'Discord' })}
                  </VisuallyHidden>
                </>
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/filmmakerdao"
                label="GitHub"
              >
                <>
                  <FaGithub />
                  <VisuallyHidden>
                    {t('socialLinkLabel', { platform: 'GitHub' })}
                  </VisuallyHidden>
                </>
              </SocialIconLink>
            </HStack>
  
          </VStack>
        </Stack>
      </Container>
    );
  }
  

  
  const CurrentStatus = () => {
    const shouldShowIcon = useBreakpointValue({ base: false, md: true });
    const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
    const { t } = useTranslation();
  
    return (
      <Stack
        as="aside"
        py={6}
        px={8}
        align="center"
        direction="row"
        spacing={8}
        bg="white"
        rounded="lg"
        color="black"
      >
        {shouldShowIcon && <Icon as={GiCrownedHeart} boxSize={20} />}
        <Stack spacing={4}>
          <Stack fontSize="xs">
            <Text fontSize="sm" fontWeight="bold">
              {t('currentStatus')}: {t('season')} 0
            </Text>
            <Text>{t('callout')}</Text>
          </Stack>
          <Box>
            <Button
              as="a"
              href="https://snapshot.org/#/devdao.eth/proposal/0x52fc76fe5865cf038b89b8c6ef78b6e691c0ab9c2b1228b84b0813b7832ce369"
              size={buttonSize}
              fontSize="xs"
              bg="white"
              border="1px"
              borderStyle="solid"
              borderColor="black"
              _hover={{ bg: 'gray.100' }}
              _active={{ bg: 'gray.200' }}
              leftIcon={<BsLightningCharge />}
            >
              {t('calloutButton')}
            </Button>
          </Box>
        </Stack>
      </Stack>
    );
  };
  
  const SocialIconLink = ({
    children,
    href,
    label,
  }: {
    children: ReactElement;
    href: string;
    label: string;
  }) => {
    return (
      <IconButton
        as="a"
        aria-label={label}
        cursor="pointer"
        href={href}
        icon={children}
        size="lg"
        variant="ghost"
      />
    );
  };
  