import React, { useState } from 'react';

const Staking = () => {
  const [stakingAmount, setStakingAmount] = useState(0);
  const [staked, setStaked] = useState(false);

  const handleStakingAmountChange = (e) => {
    setStakingAmount(e.target.value);
  }

  const handleStake = () => {
    // perform staking logic here
    setStaked(true);
    alert(`${stakingAmount} staked`);
  }

  return (
    <div>
      <h1>Staking</h1>
      <div className="staking-form">
        <label>
          Staking Amount:
          <input type="number" value={stakingAmount} onChange={handleStakingAmountChange} />
        </label>
        <button onClick={handleStake}>Stake</button>
        {staked && <div>Staked</div>}
      </div>
    </div>
  );
}

export default Staking;
