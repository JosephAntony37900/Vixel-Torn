import { Button } from '@gear-js/vara-ui';
import "./JoinInAGlobalTournamentMain.css";
import ImgPrueba from "../../../img/hero-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { useSailsCalls } from '@/app/hooks';
import { useAccount, useAlert } from '@gear-js/react-hooks';
import { Codec, CodecClass, Signer } from '@polkadot/types/types';
import { HexString } from '@gear-js/api';
import { web3Enable,web3FromSource } from '@polkadot/extension-dapp';

export default function JoinInAGlobalTournamentMain() {
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

    const objTournament = {
        title: "Torneo mundial de tetris!",
        game: "Tetris",
        description: "Campeones de tetris, preparen sus dedos porque se viene el torneo de tetris, donde competirán contra los demás para sobrevivir a la oleada de figuras, buena suerte campeones!",
        srcPhoto: ImgPrueba
    };

    return (
        <main className="boyd-join-in-a-tournament">
            <h2 className="justify-this-content">Agregar torneo <FontAwesomeIcon icon={faTrophy} /></h2>
            <div className="content-info-tournament-to-join">
                <h2>{objTournament.title}</h2>
                <img src={objTournament.srcPhoto} alt="Imagen del torneo" />
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
                    UNIRME
                </Button>
            </div>
        </main>
    );
}
