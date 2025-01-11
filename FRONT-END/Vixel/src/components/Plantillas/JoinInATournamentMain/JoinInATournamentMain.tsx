import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JoinInATournamentMain.css"
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "@/components/Atoms/ButtonLink/ButtonLink";
import { useNavigate } from "react-router-dom";
import { useSailsCalls } from '@/app/hooks';
import { useAccount, useAlert } from '@gear-js/react-hooks';
import { Codec, CodecClass, Signer } from '@polkadot/types/types';
import { HexString } from '@gear-js/api';
import { web3Enable,web3FromSource } from '@polkadot/extension-dapp';
import { Button } from '@gear-js/vara-ui';

type Torn = {
    title: string,
    game: string,
    description: string,
    srcPhoto: string
}

export default function JoinInATournamentMain ({ objTournament }: { objTournament: Torn }){
    const { account } = useAccount();
    const sails = useSailsCalls();
    const alert = useAlert();
    const navigate = useNavigate(); // Hook para redireccionar

    const getUserSigner = (): Promise<[HexString, Signer]> => {
        return new Promise(async (resolve, reject) => {
            if (!account) {
                alert.error("Accounts not ready!");
                reject('Account not ready!');
                return;
            }

            const { signer } = await web3FromSource(account.meta.source);
            const temp = (signer as string | CodecClass<Codec, any[]>) as Signer;
            resolve([account.decodedAddress, temp]);
        });
    };
    
    return(
        <main className="boyd-join-in-a-tournament">
            <h2 className="justify-this-content">Agregar torneo <FontAwesomeIcon icon={faTrophy}/></h2> 
            <div className="content-info-tournament-to-join">
                <h2>{objTournament.title}</h2>
                <img src={objTournament.srcPhoto}/>
                <h4>{objTournament.game}</h4>
                <p>{objTournament.description}</p>
                <Button onClick={async () => {
                    if (!sails) {
                        alert.error('SailsCalls is not ready!');
                        return;
                    }

                    const extensions = await web3Enable('diavlo');
                    
                          if (extensions.length === 0) {
                              console.error('No Web3 extensions found or the user denied access.');
                              return;
                          }

                    const [userAddress, signer] = await getUserSigner();

                    try {
                        const response = await sails.command(
                            'Ping/Pong',
                            {
                                userAddress,
                                signer
                            },
                            {
                                callbacks: {
                                    onSuccess() {
                                        alert.success('Message sent!');
                                        navigate("/dataTournament"); // Redirigir a la página de destino
                                    },
                                    onLoad() {
                                        alert.info('Will send a message');
                                    },
                                }
                            }
                        );

                        console.log(`Response: ${Object.keys(response)[0]}`);
                    } catch (e) {
                        alert.error('Error while sending message');
                    }
                }}>
                    Unirme
                </Button>
            </div>
        </main>
    );
}