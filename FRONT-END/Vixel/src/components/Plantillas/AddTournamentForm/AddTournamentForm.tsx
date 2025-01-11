import ButtonWhitFunction from "@/components/Atoms/ButtonWhitFunction/ButtonWhitFunction";
import "./AddTournamentForm.css";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { useSailsCalls } from '@/app/hooks';
import { useAccount, useAlert } from '@gear-js/react-hooks';
import { Codec, CodecClass, Signer } from '@polkadot/types/types';
import { HexString } from '@gear-js/api';
import { web3Enable,web3FromSource } from '@polkadot/extension-dapp';
import { Button } from '@gear-js/vara-ui';

export default function AddTournamentForm (){
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
        <main className="add-tournaments-form-body">
        
            <div className="add-tournaments-from-camps">
                <h1>Nombre</h1>
                <input type="text" id="get-name-tournament"/>
            </div>
            <div className="add-tournaments-from-camps">
                <h1>Cantidad de participantes</h1>
                <input type="number" id="get-participants-tournament"/>
            </div>
            <div className="add-tournaments-from-camps">
                <h1>Costo</h1>
                <input type="number" id="get-prize-tournament"/>
            </div>
            <div className="add-tournaments-from-camps">
                <h1>Juego</h1>
                <select id="get-game-tournament">
                    <option>Juego 1</option>
                    <option>Juego 2</option>
                    <option>Juego 3</option>
                </select>
            </div>
            <div className="add-tournaments-from-camps">
                <h1>Tipo de premio</h1>
                <select id="get-trophy-tournament">
                    <option>gVARA</option>
                    <option>NFT</option>
                    <option>Otro</option>
                </select>
            </div>
            <div className="add-tournaments-from-camps">
                <h1>Fecha</h1>
                <input type="date" id="get-date-tournament"/>
            </div>
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
                    Crear
                </Button>
        </main>
    )
}