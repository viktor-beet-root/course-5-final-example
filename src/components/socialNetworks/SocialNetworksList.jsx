import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getData from "../../api/getData";
import { allowedSocialNetwoks, moveIdSearchValue, socialNetworksUrl } from "../../config/config";

SocialNetworksList.propTypes = {
    moveId: PropTypes.number.isRequired,
};

function getAllowedSocialNetworks(data) {
    const socialNetworks = [];

    for (const socialNetworksId in data) {
        if (allowedSocialNetwoks[socialNetworksId]) {
            socialNetworks.push({
                ...allowedSocialNetwoks[socialNetworksId],
                id: data[socialNetworksId],
            });
        }
    }

    return socialNetworks;
}

function SocialNetworksList({ moveId }) {
    const [networksList, setNetworksList] = useState([]);

    useEffect(
        () => {
            async function getNetworksList() {
                const data = await getData(socialNetworksUrl.replace(moveIdSearchValue, moveId));

                if (data) {
                    setNetworksList(getAllowedSocialNetworks(data));
                }
            }
            getNetworksList();
        },
        [moveId]
    );

    return (
        <ul className="flex py-5 gap-10 text-4xl justify-center">
            {
                networksList.map(
                    (network) => (
                        <li key={network.id}>
                            <a href={network.url + network.id} target="_blank" rel="noreferrer">{network.icon}</a>
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default SocialNetworksList;
